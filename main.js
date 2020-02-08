class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    };
    get isCheckedOut() {
        return this._isCheckedOut;
    };
    get ratings() {
        return this._ratings;
    };

    set isCheckedOut(value) {
        this._isChekedOut = value;
    };

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut
    }
    getAverageRating() {
        let ratingsSum =
            this.ratings.reduce((accumulator, rating) => accumulator + rating);
        return ratingsSum / this.ratings.length;
    }
    addRating(value) {
        this._ratings.push(value)
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    };
    get pages() {
        return this._pages;
    }
};

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    };
    get director() {
        return this._runTime;
    }
}

class CD extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }
    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs
    }

}

//Book
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544)
historyOfEverything.toggleCheckOutStatus()
    //console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(1);
historyOfEverything.addRating(6);
historyOfEverything.addRating(8);

console.log('Average rating of this Book: ' + historyOfEverything.getAverageRating())

//Movie

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
//console.log(speed.isCheckedOut);
speed.addRating(8);
speed.addRating(4);
speed.addRating(11);
speed.addRating(6);
speed.addRating(7);
speed.addRating(3);

console.log('Average rating of this Movie: ' + speed.getAverageRating());

const jal = new CD('Atif Aslam', 'Hona Tha Pyaar', 7)
jal.toggleCheckOutStatus();

jal.addRating(5);
jal.addRating(2);
jal.addRating(3);
jal.addRating(8);
jal.addRating(9);
console.log('Average rating of this song: ' + jal.getAverageRating())