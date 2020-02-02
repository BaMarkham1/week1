const axios = require('axios')

module.exports = async (phrase) => {
    const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    })

    //var string_results;
    //string_results = '{"data" : '.concat(results.data, ', "status" : ', results.status, ', "statusText" : ', results.statusText, ', "headers" : ', results.headers, "}");
    //console.log(string_results);
    //console.log(results.data)
    //console.log(results.headers)

    var json_results = { data : results.data, status : results.status, statusText : results.statusText, headers : results.headers, requestHeader : results.config.headers};

    //requestHeader: response.config.headers

    //console.log(json_results)

    //console.log(JSON.stringify(results));
    //console.log(json_results.headers)

    return JSON.stringify(json_results);

    //return JSON.stringify(results.data);

}

/*  console.log(results.data);
    console.log(results.status);
    console.log(results.statusText);
    console.log(results.headers);
//
        const results = await axios({
        method: 'get',
        url: 'https://www.googleapis.com/books/v1/volumes',
        params: {
            format: 'json',
            q: `${phrase}`,
        },
    })*/
