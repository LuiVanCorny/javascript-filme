export class DAO{
    //Ludwig Korn

    read(){
        let dataArray;
        if(localStorage.getItem('movies')){
            let dataString = localStorage.getItem('movies');
            dataArray = JSON.parse(dataString);
        }else{
            dataArray = [];
        }
        return dataArray;
    }

    write(dataArray){
        localStorage.setItem('movies', JSON.stringify(dataArray));
    }

}