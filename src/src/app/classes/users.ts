export class Users {
    constructor(
        public id :number,
        public name : string,
        public email : string,
        public mobilenumber : number,
        public password : string,
        public address : string,
        public healthid : number,
        public homeid : number,
        public healthpremiumleft : number,
        public homepremiumleft : number,
        public healthstatus : number,
        public homestatus : number 
    ){}
}
