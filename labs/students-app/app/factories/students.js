app.factory('studentsFactory', function ($http) {
    var factory = {};
    factory.students = {};

    factory.getStudents = function () {
        var config = {
            params: {
                'rows': 300,
                'fname': '{firstName}',
                'lname': '{lastName}',
                'tel': '{phone|format}',
                'address': '{streetAddress}',
                'city': '{city}',
                'state': '{usState|abbr}',
                'zip': '{zip}',
                'callback': 'JSON_CALLBACK'
            }
        };

        return $http.jsonp("http://www.filltext.com", config, {});
    };

    factory.addStudent = function (fname, lname, tel, address, city, state, zip) {
        this.students.push({
            fname: fname,
            lname: lname,
            tel: tel,
            address: address,
            city: city,
            state: state,
            zip: zip
        });
    };

    return factory;
});