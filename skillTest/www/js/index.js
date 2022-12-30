/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version)
}
popForm = (pra) => {
    $("#"+pra).css("bottom", "0");
}
closeBox = (pra) => {
    $("#"+pra).css("bottom", "-100vh");
}
var form=document.getElementById("signupForm");
var form2=document.getElementById("signupForm"); 

// function submitForm(event){
//     //Preventing page refresh
//     event.preventDefault();
// }
// form.addEventListener('load', submitForm);

// function submitForm2(event){
//     //Preventing page refresh
//     event.preventDefault();
// }
// form2.addEventListener('load', submitForm2);

signIn = () => {
    if($("#login-email").val() == "" || $("#login-password").val() == ""){
        throw console.error("please fill all the ");
    }else{
        let finalInput = JSON.stringify({email: $("#login-email").val(), password: $("#login-password").val()});
        $.ajax({
            type: "POST",
            url: "http://127.0.0.1:82/login",
            data: finalInput,
            contentType: "application/json",
            dataType: "json",
            success: function(response) {
                console.log(response);
            },
            error: function(response) {
                console.log(response);
            }
        });
    }
}
signup = () => {
    if($("#name").val() == "" || $("#email").val() == "" || $("#phone").val() == "" || $("#password").val() == ""){
        throw console.error("please fill all the ");
    }else{
        let finalInput = JSON.stringify({name: $("#name").val(), email: $("#email").val(), number: $("#phone").val(), password: $("#password").val()});
        $.ajax({
            type: "POST",
            url: "http://127.0.0.1:82/",
            data: finalInput,
            contentType: "application/json",
            dataType: "json",
            success: function(response) {
                console.log(response);
            },
            error: function(response) {
                console.log(response);
            }
        });
    }
}