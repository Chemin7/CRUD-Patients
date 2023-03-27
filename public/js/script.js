

$("#update_patient").submit(function(event){
    event.preventDefault()

    var unidexed_array = $(this).serializeArray();
    var data = {}
    console.log("ua: ",unidexed_array)
    $.map(unidexed_array,function(n,l) {
        data[n['name']] = n['value']
    })

    console.log(data.id)
    let request = {
        "url":`http://localhost:3000/patients/api/${data.id}`,
        "method": "PUT",
        "data":data,

       /* success: function (response) {
        
                 alert("You will now be redirected.");
                 window.location = "http://localhost:3000/patients";
             
         },*/
    }
    console.log(data)
    
    $.ajax(request).done(function(response){
        alert("Data updated")
        window.location = "http://localhost:3000/patients";
    })
})
document.querySelectorAll('.update').forEach(item => {
  item.addEventListener('click', event => {
    axios.get(`http://localhost:3000/patients/update-patient'`)
    window.location.reload();
  })
})

document.querySelectorAll('.delete').forEach(item => {
    item.addEventListener('click', event => {
      axios.delete(`http://localhost:3000/patients/api/${item.dataset.id}`)
      window.location.reload();
    })
  })