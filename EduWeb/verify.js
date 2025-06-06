function verify(){
    let p= document.getElementById('password');
    if(p.value==' ew@html25'){
        window.location="html.html";
    }
    else if(p.value=='ew@css25'){
        window.location="css.html";
    }
    
    else if(p.value=='ew@js25'){
        window.location="javascript.html";
    }
    else if(p.value=='ew@bs25'){
        window.location="bootstrap.html";
    }
    else if(p.value=='ew@njs25'){
        window.location="nodejs.html";
    }
    else if(p.value=='ew@rjs25'){
        window.location="reactjs.html";
    }
    else if(p.value=='ew@php25'){
        window.location="php.html";
    }
    else if(p.value=='ew@py25'){
        window.location="python.html";
    }
    else if(p.value==''){
        alert("Password can't be empty");
        return false;
    }
    else{
        alert('Incorrect password');
    }
}