const laptops = [
    {
    model: "ASUS",
    price: 2500,
    memory: '256 GB',
    stockAvailibility: false
},

    {
    model: "HP",
    price: 2000,
    memory: '128 GB',
    stockAvailibility: true
    }
]


for(i=0; i<laptops.length; i++){
    document.querySelector('table tbody').innerHTML +=
    (`
       
        <td id="model">
            ${laptops[i].model}
        </td>

        <td id="price">
            ${laptops[i].price}
        </td>

        <td id="memory">
            ${laptops[i].memory}
        </td>

        <td id="stockcondition">
            ${laptops[i].stockAvailibility ? 'Movcuddur' : 'Movcud deyil'}
        </td>

        
       </tr>
    `)

    
}