

$("#update_patient").submit(function(event){
    event.preventDefault()

    var unidexed_array = $(this).serializeArray();
    var data = {}
    // console.log("ua: ",unidexed_array)
    $.map(unidexed_array,function(n,l) {
        data[n['name']] = n['value']
    })

    console.log(data.id)
    let request = {
        "url":`http://localhost:3000/patients/api/${data.id}`,
        "method": "PUT",
        "data":data,

      
    }
    console.log(data)
    
    $.ajax(request).done(function(response){
        alert("Data updated")
        window.location = "http://localhost:3000/patients";
    })
})

/*
document.querySelector('#update_patient').addEventListener('submit', async (event) => {
  event.preventDefault();

  const first_name = document.querySelector('#first_name').value;
  const last_name = document.querySelector('#first_name').value;
  const phone = document.querySelector('#phone').value;
  const birthday = document.querySelector('#phone').value;
  // Añade todos los campos que deseas actualizar
  const patientId = document.querySelector('#patientId').value;
  console.log("scriopt")
  try {
    await axios.put(`http://localhost:3000/patients/api/${patientId}`, {
      first_name,
      last_name,
      phone,
      birthday
      // Añade todos los campos que deseas actualizar
    });
    alert("Data updated")
    window.location = "http://localhost:3000/patients";
  } catch (err) {
    console.error(err);
  }
});*/

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