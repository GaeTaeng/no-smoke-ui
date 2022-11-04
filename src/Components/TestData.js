import dayjs from "dayjs";

export const InitTestData = {userId : 0, name : "", start_date : dayjs(), day_of_count : 0};

export const testData = [ 
    {userId : 1, name : "김경인", start_date : dayjs("2022/11/01"), day_of_count : 20},
    {userId : 2, name : "이소현", start_date : dayjs("2022/09/13"), day_of_count : 29},
    {userId : 3, name : "김보연", start_date : dayjs("2022/09/13"), day_of_count : 13},
    {userId : 4, name : "정유진", start_date : dayjs("2022/09/13"), day_of_count : 20},
    {userId : 5, name : "김태훈", start_date : dayjs("2017/02/23"), day_of_count : 20}
]