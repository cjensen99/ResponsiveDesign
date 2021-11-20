/* Form Validation Example */
/* Personal Web Site-Visitor Form Validation */
/* See comments with TODO for code you need to implement */
const stateAbbreviations = [
    'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY'
   ];
           
  function initValidation(formName) {
  
    let $form = $(formName);
  
    $('form :input').change(function(ev){
      validateForm();
      if(!this.checkValidity())
        $(this).addClass("was-validated")
      
      //NOTE: we use 'was-validated' class so that you show the error indications only for the single field rather
      //than the whole form at once
    });
    
    $form.submit(function(event){
      $form = $(this);
      formEl=$form.get(0);
  
      event.preventDefault();  //prevent default browser submit
      event.stopPropagation(); //stop event bubbling
  
      validateForm();
  
      if (!formEl.checkValidity()){
        $(":input").addClass("was-validated")
      }
      else{
        $("#form").hide();
        $("#thankyou").show();
      }
    });
  }
  
  function validateForm() {
    
    validateState("#state", "You must enter a valid two character state code, e.g., UT");
    
    /*note, to validate the group, just passing in id of one of them ("#newspaper"), we will use groupName to check status of group.  Just call setElementValidity on the '#newspaper' element to show the error message*/
   
    validateCheckboxGroup("#newspaper", "find-page", "you must select at least one!");
    
  }
  function validateState(id, msg){
    $el = $(id);
    let valid=false;
    $EL = $el.val().toUpperCase();
    if(stateAbbreviations.includes($EL)){
        valid = true;
    }
    setElementValidity(id, valid, msg);
  }
  
  function validateCheckboxGroup(fieldName, groupName, message) {
    let valid=false;
    if($("#google").is(":checked")){
        valid = true;
        $('#checkboxError').hide();
    }
    else if($("#friend").is(":checked")){
        valid = true;
        $('#checkboxError').hide();
    }
    else if($("#newspaper").is(":checked")){
        valid = true;
        $('#checkboxError').hide();
    }
    else{
        $('#checkboxError').show();
    }
    
    setElementValidity(fieldName, valid, message);
    
    return valid;
  }
  
  function setElementValidity(fieldName, valid, message){
    let $field=$(fieldName);
    let el = $field.get(0);
    if (valid) {  //it has a value
      el.setCustomValidity('');  //sets to no error message and field is valid
    } else {
      el.setCustomValidity(message);   //sets error message and field gets 'invalid' stat
    }
  }
    