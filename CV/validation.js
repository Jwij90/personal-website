//java script file for validation


const form = document.getElementById('form');
const Name = document.getElementById('Name');
const Email = document.getElementById('Email');
const ContactNo = document.getElementById('ContactNo');
const Message = document.getElementById('Message');

form.addEventlistner('submit',e =>{
  e.preventDefault();
  checkInput();
});

const setError = (element,message)=>{
  const inputControl = element.parentElement();
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setsuccess = element =>{
  const inputControl = element.parentElement();
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

function checkInput(){
   const NameValue = Name.value.trim();
  const EmailValue = Email.value.trim();
  const ContactNoValue = ContactNo.value.trim();
  const MessageValue = Message.value.trim();

  if(Name == ''){
    setError(Name, 'Name is required');
  }
  else{
setsuccess(Name);
  }

  if(Email == ''){
    setError(Email, 'Email is required');
  }
  else{
  setsuccess(Email);
  }

  if(ContactNo == ''){
    setError(ContactNo, 'ContactNo is required');
  }
  else{
  setsuccess(ContactNo);
  }

  if(Message == ''){
    setError(Message, 'Message is required');
  }
  else{
setsuccess(Message);
  }



}
