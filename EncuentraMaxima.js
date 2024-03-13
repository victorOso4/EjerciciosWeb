function max(arr) {  
    let maximo = arr[0]; 
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maximo) {
        maximo = arr[i];
      }
    }
  
    return maximo;
  }

    console.log(max([3, 9, 6])) // 9
    console.log(max([67, 35, 54, 26])) // 67
    console.log(max([5, 9, 2, 4, 5, 7])) // 9