
function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Data has been fetched');
      }, 2000);
    });
  }
  

  async function fetchDataAsync() {
    console.log('Start fetching data');
    
    
    const result = await fetchData();
    
    console.log(result);
    
    console.log('End fetching data');
  }
  
  
  fetchDataAsync();
  

