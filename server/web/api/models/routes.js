module.exports = [
  { 
    name:'env',
    type:['get', 'post', 'delete', 'put'],
    acl: {
      root: ['post:all','get:all', 'put:all', 'delete:all'],
      admin: ['post:all','get:all', 'put:all', 'delete:all'] ,  
      anonymous: ['post:all','get:all', 'put:all', 'delete:all'] 
    },
    table:'environment',
    template:'json'   
  }, 
  
  { 
    name:'env3224_data',
    type:['get', 'post', 'delete', 'put'],
    acl: {
      root: ['post:all','get:all', 'put:all', 'delete:all'],
      admin: ['post:all','get:all', 'put:all', 'delete:all'] ,     
      anonymous: ['post:all','get:all', 'put:all', 'delete:all'] 
    },
    table:'monitor',
    template:'json'   
  }
  
//   { 
//     name:'materials',
//     type:['get', 'post', 'delete', 'put'],
//     acl: {
//       root: ['post:all','get:all', 'put:all', 'delete:all'],
//       admin: ['post:all','get:all', 'put:all', 'delete:all']      
//     },
//     table:'materials',
//     template:'json'
//   },
  
//   { 
//     name:'models',
//     type:['get', 'post', 'delete', 'put'],
//     acl: {
//       root: ['post:all','get:all', 'put:all', 'delete:all'],
//       admin: ['post:all','get:all', 'put:all', 'delete:all']      
//     },
//     table:'models',
//     template:'json'
//   },
  
//   { 
//     name:'model_details',
//     type:['get', 'post', 'delete', 'put'],
//     acl: {
//       root: ['post:all','get:all', 'put:all', 'delete:all'],
//       admin: ['post:all','get:all', 'put:all', 'delete:all']      
//     },
//     table:'models',
//     template:'json',
//     join_columns:'models.id, models.model_name, models.model_type, models.material_id, models.element_type, models.orientation, models.minusGolH,models.minusGolL, models.correctionWorkH,models.correctionWorkL, models.element_correction, models.is_group, models.belongTo, models.cellToFill, models.obs2, materials.material_name , materials.um, materials.type, materials.lenght , materials.width, materials.price,materials.weight, materials.active ',
//     join:' RIGHT JOIN materials ON models.material_id = materials.id  '
//   }, 
  
//   { 
//     name:'colors',
//     type:['get', 'post', 'delete', 'put'],
//     acl: {
//       root: ['post:all','get:all', 'put:all', 'delete:all'],
//       admin: ['post:all','get:all', 'put:all', 'delete:all']      
//     },
//     table:'colors',
//     template:'json'   
//   }, 
  
//   { 
//     name:'types',
//     type:['get', 'post', 'delete', 'put'],
//     acl: {
//       root: ['post:all','get:all', 'put:all', 'delete:all'],
//       admin: ['post:all','get:all', 'put:all', 'delete:all']      
//     },
//     table:'types',
//     template:'json'   
//   }, 
  
//   { 
//     name:'api/environment',
//     type:['get', 'post', 'delete', 'put'],
//     acl: {
//       root: ['post:all','get:all', 'put:all', 'delete:all'],
//       admin: ['post:all','get:all'],
//       normal: ['get:own', 'post:own'],
//       resticted: ['get:own'],
//       anonymous: ['get:own', 'post:own']
//     },
//     table:'environment',
//     template:'json'   
//   }
];
