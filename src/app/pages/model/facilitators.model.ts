export class FacilitatorsViewModel {
    constructor(
        public id?: number,
        public facilitatorsName?: string,
        public emailAddress?: string,
        public phoneNumber?:string,
        public contactPerson?: string,
        public client?: number,
        public sites?: number,
        public tenants?: number,
        public areaSqFt?: string,
        public companyName?:string,
        public website?:string,
        public gsdNumber?: string,
        public role?:  string,
        public fullName?: string,
        public faxnumber?: string,
        public postCode?: string,
        public city?: string,
        public state?: string,

    ) {
        this.id = id;
        this.facilitatorsName = facilitatorsName;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.contactPerson = contactPerson;
        this.client = client;
        this.sites = sites;
        this.tenants = tenants;
        this.areaSqFt = areaSqFt;
        this.companyName = companyName;
        this.website = website;
        this.gsdNumber =gsdNumber;
        this.role = role;
        this.fullName = fullName;
        this.faxnumber = faxnumber;
        this.postCode = postCode;
        this.city = city || 'select';
        this.state = state || 'select';
    }
}