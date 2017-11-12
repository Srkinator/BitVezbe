class Structure {
    constructor(name, country, temp, description) {
        this.name = name;
        this.country = country;
        this.temp = Math.floor(Number(temp) - 273);
        this.description = description;
    }

    getData() {
        return `Name : ${this.name}\nCountry : ${this.country}\nTemp : ${this.temp}C\nDescription : ${this.description}`;
    }
}

export default Structure;