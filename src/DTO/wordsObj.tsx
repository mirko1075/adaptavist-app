export default class ResultObj {
  wordsArr: string[] | undefined;
  constructor(wordsArr: string[]) {
    this.wordsArr = wordsArr;
  }

  getResult(): { word: string; count: number } {
    return { word: "", count: 0 };
  }
}
