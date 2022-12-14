export default {
    name: 'property',
    title:'Property',
    type:'document',
    fields:[
        {
         name: 'title',
         title:'Title',
         type:'string', 
        },
        {
            name: 'location',
            title:'Location',
            type:'geopoint', 
           },
           {
            name: 'propertyType',
            title:'PropertyType',
            type:'string',
            options:{
                list:[
                    {title:'House', value:'house'},
                    {title:'Flat', value:'flat'},
                    {title:'Bed and Breakfast', value:'bed-and-breakfast'},
                    {title:'Boutique Hotel', value:'boutique-hotel'}
                ],
                layout:'radio'
            }
           },
           {
            name: 'mainImage',
            tittle:'Main Image',
            type:'image',
            options:{
                hotspot:true,
             },
            },
            {
                name: 'images',
                tittle:'Images',
                type:'array',
                of:[{
                    type:'propertyImage'
                },]
            },
            {
                name:'pricePerNight',
                title:'Price Per Night',
                type:'number',
            },
            {
                name:'beds',
                title:'Beds',
                type:'number',
            },
            {
                name:'bedrooms',
                title:'Bedrooms',
                type:'number',
            },
            {
                name:'slug',
                title:'Slug',
                type:'slug',
                options:{
                    source:'title',
                    maxLength: 100,
                },
            },
            {
                name:'id',
                title:'ID',
                type:'number',
            },
            {
                name:'description',
                title:'Description',
                type:'string',
            },
            {
                name:'host',
                title:'Host',
                type:'host',
             
            },
            {
            name:'reviews',
            title:'Reviews',
            type:'array',
            of:[{type:'review'}]
            }
    ]
}