<?php

//echo var_dump($_POST).'POST    <br>';
//echo var_dump($_REQUEST).'REQUEST    <br>';
//echo var_dump($_GET).'GET    <br>';
//exit;
$share_email = $_POST['share_email'];
$n_email = $_POST['n_email'];
$n_calendar = $_POST['n_calendar'];
$n_size = $_POST['n_size'];
$n_wage = $_POST['n_wage'];
$n_app = $_POST['n_app'];

$data_urls = "https://smartcloudconnect.io/roi-calculate-for-pdf-screen/?n_email=".$n_email."&n_calendar=".$n_calendar."&n_size=".$n_size."&n_wage=".$n_wage."&n_app=".$n_app;

$req = array(
    'url' => $data_urls,
//    'urls' => "https://smartcloudconnect.io/roi-calculate-for-pdf-screen/?n_email=30&n_calendar=30&n_size=5&n_wage=30000&n_app=true",
    'viewportWidth' => 1480,
    'type' => "htmlToPdf",
    'pageMargin' => 0,
    'pageMarginUnits' => "px",
    'hideNotices' => true
);

if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
//    eto ajax
} else {
    header('Content-Type: application/json');
    echo json_encode(['msg' => 'fail','status'=>'ajax fail']);
    exit;
}

//$post_data = http_build_query($req, '', '&');
$post_data = json_encode($req);

$curl = curl_init('https://api.sejda.com/v1/tasks');

curl_setopt($curl, CURLOPT_HEADER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-Type: application/json"));
//curl_setopt($curl, CURLOPT_FAILONERROR, true);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
//curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);




$data = curl_exec($curl);

$code = curl_getinfo($curl, CURLINFO_HTTP_CODE);

if ($code !== 200 )
{
    header('Content-Type: application/json');
    echo json_encode(['msg' => 'fail','status'=>'Curl fail']);
    exit;
}

curl_close($curl);


//header('Content-Type: application/pdf');
//header('Content-Disposition: attachment; filename="downloaded.pdf"');
//echo "$data";
//echo json_decode($data, true);




//$name        = "Название здесь идет";
//$email       = "oleksii.lialiusho@invisible.io";
$email       = $share_email;
//$email       = "swaty0007@gmail.com";
//$to          = "$name <$email>";
//$to          = "insidemarketing@invisible.io";
$to          = $email;
$from        = "SmartCloudConnect PDF form <do-not-reply@smartcloudconnect.io>";
$subject     = "PDF Share ";
$mainMessage = "Привет, я сообщение с pdf файлом";
//$fileatt     = "files/test.pdf"; // Расположение файла
$fileatttype = "application/pdf";
$fileattname = "ROI_calculate_SCC.pdf"; //Имя, которое вы хотите использовать для отправки, или вы можете использовать то же имя
$headers     = "From: $from";

// Открываем и читаем файл в переменную.
//$file = fopen($fileatt, 'rb');
//$data = fread($file, filesize($fileatt));
//fclose($file);

// Это прикрепляет файл
$semi_rand     = md5(time());
$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";
$headers      .= "\nMIME-Version: 1.0\n" .
    "Content-Type: multipart/mixed;\n" .
    " boundary=\"{$mime_boundary}\"";
$message = "Это multi-part сообщение в формате MIME․\n\n" .
    "-{$mime_boundary}\n" .
    "Content-Type: text/plain; charset=\"iso-8859-1\n" .
    "Content-Transfer-Encoding: 7bit\n\n" .
    $mainMessage  . "\n\n";

$data = chunk_split(base64_encode($data));
$message .= "--{$mime_boundary}\n" .
    "Content-Type: {$fileatttype};\n" .
    " name=\"{$fileattname}\"\n" .
    "Content-Disposition: attachment;\n" .
    " filename=\"{$fileattname}\"\n" .
    "Content-Transfer-Encoding: base64\n\n" .
    $data . "\n\n" .
    "-{$mime_boundary}-\n";

// Отправить письмо
if(mail($to, $subject, $message, $headers))
{
    header('Content-Type: application/json');
//    mail("insidemarketing@invisible.io, insidesales@invisible.io",
//        "SCC Roi share",
//        "Client info:<br>Email: ".$to."<br>Number emails: $n_email<br>Number calendars invites: $n_calendar<br>Team size: $n_size<br>Wage: $n_wage<br>",
//        "Content-type: text/html; charset=windows-1251 \r\nFrom: SCC ROI form <do-not-reply@smartcloudconnect.io>\r\nReply-To: insidemarketing@invisible.io, insidesales@invisible.io");
    echo json_encode(['msg' => 'ok','status'=>'Mail send']);
    exit;
} else {
    header('Content-Type: application/json');
    echo json_encode(['msg' => 'fail','status'=>'Mail fail']);
    exit;
}

?>