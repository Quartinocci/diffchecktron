    
    const drop1=document.getElementById("drop1");
    const drop2=document.getElementById("drop2");

    drop1.addEventListener("dragover",(e) => {
        e.stopPropagation();
        e.preventDefault();
    });
    drop1.addEventListener("drop",(e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log("im in drop");
        console.log(e);
        const files=e.dataTransfer.files;
        for(const file of files)
        {
            console.log(file.name);
        }
    });
    function confirm() 
    {
      document.getElementById("status").innerHTML = "&#9989; files matching &#9989;";
    }
    function deny() 
    {
      document.getElementById("status").innerHTML = "&#10060; files NOT matching &#10060;";
    }