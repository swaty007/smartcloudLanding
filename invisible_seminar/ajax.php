<?php

/**
 * Show content inside contact popup
 */
function simple_popup_form_action() {

    $contact_us_title = get_field("contact_us_title", options);
    $contact_us_fields = get_field("contact_us_fields", options);
    $contact_us_submit_button_title = get_field("contact_us_submit_button_title", options);

    $html  = '<p class="title">'.$contact_us_title.'</p>';
    $html .= '<form>';

    if(is_array($contact_us_fields)){
        foreach($contact_us_fields as $field){
            if($field['required']){
                $requiredClass = " required";
                $requiredLabel = '<span class="red">*</span>';
            } else {
                $requiredClass = "";
                $requiredLabel = '';
            }
            if($field['type'] == "Email"){
                $inputEmailClass = " email";
            } else {
                $inputEmailClass = "";
            }
            if($field['type'] == "Input" || $field['type'] == "Email"){
                $html .= '<p class="input"><label>';
                $html .= '<input type="text" class="textInput'.$requiredClass.$inputEmailClass.'" name="'.$field['name'].'" id="'.$field['name'].'" />';
                $html .= '<span class="label">'.$requiredLabel.$field['label'].'</span>';
                $html .= '</label></p>';
            } elseif($field['type'] == "Textarea"){
                $html .= '<p class="textArea"><label>';
                $html .= '<textarea class="textAreaInput'.$requiredClass.'" name="'.$field['name'].'" id="'.$field['name'].'"></textarea>';
                $html .= '<span class="label">'.$requiredLabel.$field['label'].'</span>';
                $html .= '</label></p>';
            }
        }
    }

    $html .= '<p class="button"><a href="#"><span>'.$contact_us_submit_button_title.'</span></a></p>';
    $html .= '<p style="color: #055492;font-size: 13px;font-weight: 400;line-height: 17px;margin: 0!important;">By submitting your information to our website you agree to the terms outlined in our <a href="/privacy-policy/" target="_blank">privacy policy</a> and our <a href="/terms-conditions/" target="_blank">terms and conditions</a>.</p>';
    $html .= '</form>';

    $toJson['html'] = $html;
    $toJson['status'] = "ok";
    echo json_encode($toJson);

    exit;
}
add_action( 'wp_ajax_simple_popup_form', 'simple_popup_form_action' );
add_action( 'wp_ajax_nopriv_simple_popup_form', 'simple_popup_form_action' );

/**
 * Submit contact mail form
 */
function contact_form_submit_action() {

    if( isset($_POST['formData']) ){

        $formData = $_POST['formData'];
        $currentPage = $_POST['currentPage'];
        $contact_us_fields = get_field("contact_us_fields", options);
        $contact_us_mail_subject = get_field("contact_us_mail_subject", options);
        $mail_recipient = get_field("mail_recipient", options);
        $success_message = get_field("success_message", options);
        $subject = "=?utf-8?B?" . base64_encode( $contact_us_mail_subject ) . "?=";
        $noReplyMail = "do-not-reply@".str_ireplace('www.','',str_ireplace('https://','',str_ireplace('http://','',str_ireplace('/en','',str_ireplace('/ru','',str_ireplace('/ua','',get_bloginfo('url')))))));
        $message  = "<!DOCTYPE html><html><head><meta charset='utf-8' /></head><body><h1>".$contact_us_mail_subject."</h1>";

        if(is_array($formData)){
            foreach ($formData as $line) {
                if(is_array($contact_us_fields)){
                    foreach ($contact_us_fields as $mask) {
                        if($line['name'] == $mask['name']){
                            $message .= "<p><b>".$mask['label'].":</b> ".str_replace(PHP_EOL,"<br>",$line['value'])."</p>";
                        }
                    }
                }
            }
        }

        $message .= "<p><b>Sent from:</b> ".$currentPage."</p>";

        $message .= "</body></html>";

        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: $noReplyMail\r\n";

        if(is_array($mail_recipient)){
            foreach($mail_recipient as $emailToSend){
                mail($emailToSend['email'], $subject, $message, $headers);
            }
        }

        $successful  = '<div class="successful">';
        $successful .= '<p>'.$success_message.'</p>';
        $successful .= '</div>';

        $toJson['successful'] = $successful;

        $toJson['status'] = "ok";
        echo json_encode($toJson);

    }

    exit;
}
add_action( 'wp_ajax_contact_form_submit', 'contact_form_submit_action' );
add_action( 'wp_ajax_nopriv_contact_form_submit', 'contact_form_submit_action' );


function contact_form_submit_webinar_action() {

    if( isset($_POST['formData']) ){

        $formData = $_POST['formData'];
        $currentPage = $_POST['currentPage'];
        $contact_us_fields = get_field("contact_us_fields", options);
        $contact_us_mail_subject = "[Invisible.io] Contact Us Webinar";
        $mail_recipient = get_field("mail_recipient", options);
        $success_message = get_field("success_message", options);
        $subject = "=?utf-8?B?" . base64_encode( $contact_us_mail_subject ) . "?=";
        $noReplyMail = "do-not-reply@".str_ireplace('www.','',str_ireplace('https://','',str_ireplace('http://','',str_ireplace('/en','',str_ireplace('/ru','',str_ireplace('/ua','',get_bloginfo('url')))))));
        $message  = "<!DOCTYPE html><html><head><meta charset='utf-8' /></head><body><h1>".$contact_us_mail_subject."</h1>";

        if(is_array($formData)){
            foreach ($formData as $line) {
                if(is_array($contact_us_fields)){
                    foreach ($contact_us_fields as $mask) {
                        if($line['name'] == $mask['name']){
                            $message .= "<p><b>".$mask['label'].":</b> ".str_replace(PHP_EOL,"<br>",$line['value'])."</p>";
                        }
                    }
                    if ($line['name'] == "Position") {
                        $message .= "<p><b>Position:</b> ".str_replace(PHP_EOL,"<br>",$line['value'])."</p>";
                    } else if ($line['name'] == "Company") {
                        $message .= "<p><b>Company:</b> ".str_replace(PHP_EOL,"<br>",$line['value'])."</p>";
                    }
                }
            }
        }

        $message .= "<p><b>Sent from:</b> ".$currentPage."</p>";

        $message .= "</body></html>";

        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: $noReplyMail\r\n";

        if(is_array($mail_recipient)){
            foreach($mail_recipient as $emailToSend){
                mail($emailToSend['email'], $subject, $message, $headers);
            }
        }

        $successful  = '<div class="successful">';
        $successful .= '<p>'.$success_message.'</p>';
        $successful .= '</div>';

        $toJson['successful'] = $successful;

        $toJson['status'] = "ok";
        echo json_encode($toJson);

    }

    exit;
}
add_action( 'wp_ajax_contact_form_submit_webinar', 'contact_form_submit_webinar_action' );
add_action( 'wp_ajax_nopriv_contact_form_submit_webinar', 'contact_form_submit_webinar_action' );
