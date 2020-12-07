export function BuildGridArray<T>(
  arg1: Array<T>,
  gridColCount: number
): Array<Array<T>> {
  console.log("utility invoked");
  let len = arg1.length;
  let newRowSize = 0;
  if (len % 3 != 0) {
    newRowSize = Math.round(len / gridColCount) + 1;
  } else {
    newRowSize = Math.round(len / gridColCount);
  }
  let rowCount = new Array(newRowSize);
  console.log("row size:" + newRowSize);
  let productCategoryLastIndex = 0;
  for (let i = 0; i < newRowSize; i++) {
    let tempProductCategoryArray = new Array<T>(gridColCount);
    for (let j = 0; j < gridColCount; j++) {
      let localIndex = productCategoryLastIndex + j;
      if (localIndex < len) {
        tempProductCategoryArray[j] = arg1[localIndex];
      } else {
        break;
      }
      if (j == gridColCount - 1) {
        productCategoryLastIndex = localIndex + 1;
      }
    }

    console.log(tempProductCategoryArray);
    rowCount[i] = tempProductCategoryArray;
  }

  console.log(rowCount);

  return rowCount;
}
