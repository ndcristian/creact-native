module.exports = {
  // here we get sqlParams and generate sqlSring for each request type 
  //-----------------------------------------------
  get: function(sqlParams) {
    console.log('------->sqlParset:GET:sqlParams::: ', sqlParams);

    let columnsToSelect = '*';
    let join_expresion  = '';
    if(sqlParams.join){
      columnsToSelect = sqlParams.join_columns;
      join_expresion = sqlParams.join;
    }
    
    let queryString = 'SELECT ' + columnsToSelect + ' FROM ' + sqlParams.table + join_expresion;
    

    if (sqlParams.sqlColumns.length > 0 && sqlParams.sqlColumns.length == sqlParams.sqlValues.length) {
      queryString = queryString + ' WHERE ';
      
      sqlParams.sqlColumns.forEach(function(value, index) {
        
         let quotation = isNaN(sqlParams.sqlValues[index]) ? '"' : '';
        
        queryString = queryString + value + '='+ quotation + sqlParams.sqlValues[index] + quotation + ' AND '
        if (sqlParams.sqlColumns.length == (index + 1)) {
          // remove comma after the last pair (columns=value)
          if (queryString.substr(queryString.length - 4) == 'AND ') {
            queryString = queryString.substring(0, queryString.length - 4);
          }
        }
      });
      // treat option ORDER BY 
      if (sqlParams.sort.length>0){
        queryString = queryString + ' ORDER BY ';
        
        sqlParams.sort.forEach(function(value, index){
         let sortOrder = (value.value ==1) ? 'ASC':'DESC';
          let comma =  (sqlParams.sort.length==index+1) ? '':', '
          queryString = queryString + value.column + ' '+ sortOrder + comma;
        });
        
      }
    }
    console.log('------->sqlParser:GET:sql::: ', queryString);
    return queryString;
  },

//--------------------------------------------------
  post: function(sqlParams) {

    let queryString = 'INSERT INTO ' + sqlParams.table + '(' + sqlParams.sqlColumns + ') VALUES (';
    sqlParams.sqlValues.forEach(function(value, index) {
      // trebuie sa testam daca value este number
      let quotation = isNaN(value) ? '"' : '';
      console.log ('##### quotation', value, quotation);
      queryString = queryString + quotation + value + quotation +',';
      if (sqlParams.sqlValues.length == (index + 1)) {
        // remove comma after the last pair (columns=value)
        if (queryString.substr(queryString.length - 1) == ',') {
          queryString = queryString.substring(0, queryString.length - 1);
          queryString = queryString + ')';
        }
      }

    });
    console.log('------->sqlParser:POST:sql::: ', queryString);
    return queryString;
  },
  
  //-------------------------------------------------
  
  put:function(sqlParams){
    
    let queryString = 'UPDATE ' + sqlParams.table + ' SET ';
      sqlParams.sqlColumns.forEach(function(value, index) {
       
        if (value !== 'id') {
          let quotation = isNaN(sqlParams.sqlValues[index]) ? '"' : '';
          queryString = queryString + value + '= '+quotation + sqlParams.sqlValues[index] + quotation+',';
        }
        
        if (sqlParams.sqlColumns.length == (index + 1)) {
          // remove comma after the last pair (columns=value)
          if (queryString.substr(queryString.length - 1) == ',') {
            queryString = queryString.substring(0, queryString.length - 1);
          }
          queryString = queryString + ' WHERE id=' + sqlParams.sqlId.id;
        }
        
      });

      console.log('-----> api/models/crud:PUT:SQL String:++', queryString);
    return queryString;
  }
  

};