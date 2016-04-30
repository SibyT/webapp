CardForYou.models.placesModel = new Ext.regModel('placesModel', {
    fields: [
        {name: 'name', type: 'string'},
        {name: 'map_pin', type: 'string'},
        {name: 'beschreibung',       type: 'string'},
        {name: 'detailbild',   type: 'string'},
        {name: 'land', type:'string'},
        {name: 'gebiet_name',    type: 'string'},
        {name: 'ort', type: 'string'},
        {name: 'strasse', type:'string'},
        {name: 'verguenstigung', type:'string'},
        {name: 'adresszusatz', type: 'string'},
        {name: 'bild', type: 'string'}
    ]
});