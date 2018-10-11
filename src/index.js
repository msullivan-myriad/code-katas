import CTCIOneOne from "./ctci/ctci.1.1";

class FetchKata {

    constructor() {
       this.ctci = new CTCIOneOne;
    }

    returnQandA(chapter, problem) {

        if (chapter === 1 && problem === 1) {
            console.log(this.ctci.question());
            return this.ctci.answer();
        }

        else {
            return null;
        }

    }

}

const answers = new FetchKata();


/** Run debugger so I can use facade in the console **/
debugger;
