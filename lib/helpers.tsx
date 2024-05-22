import { format } from "date-fns";

export const dateToDateText = (date: Date): string => {
    let result = '';
    let arrBulan = [
        '', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ]
    try{
        result = parseInt(format(date, "dd"))+" "+arrBulan[parseInt(format(date, "MM"))]+" "+format(date, "yyyy")
    }catch(err){

    }
    return result;
}

export const dateToDateDB = (date: Date): string => {
    return format(date, "yyyy-MM-dd");
}

export const dateDBToDateText = (date: string): string => {
    let result = '';
    let arrBulan = [
        '', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ]
    try{
        let arrDate = date.split(" ")
        arrDate = arrDate[0].split("-")
        result = parseInt(arrDate[2])+" "+arrBulan[parseInt(arrDate[1])]+" "+arrDate[0]
    }catch(err){

    }
    return result;
}

export const dateDBToDate = (date: string): Date => {
    let day = 0;
    let month = 0;
    let year = 0;
    
    try{
        let arrDate = date.split("-");
        day = parseInt(arrDate[2]);
        month = parseInt(arrDate[1])-1;
        year = parseInt(arrDate[0]);
    }catch(err){

    }
    return new Date(year, month, day);
}