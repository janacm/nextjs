import axios  from "axios";

let baseURL =  'https://stage.ema-api.com/ema-dev/firm/dermpmsandbox277/ema/fhir/v2/Patient/';
const ax = axios.create({
    headers: {
        'x-api-key': '0bab347f-0caa-4030-b0de-88d5c8a3b1cd',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaGlyX2lSSEdZIiwicG9sICAgICAgICAiOiJjaGFuZ2VtZSIsInVybFByZWZpeCI6ImRlcm1wbXNhbmRib3gyNzciLCJ2ZW5kb3IiOiJmaGlyX2lSSEdZQGRlcm1wbXNhbmRib3gyNzciLCJpc3MiOiJtb2RtZWQiLCJ0b2tlblR5cGUiOiJhY2Nlc3MiLCJqdGkiOiI3YjYzYTllZDUwNTE0OWNkODdhMjIyZWIwZjJjNTZhYyJ9.3efYfPcdkacvWWx6GxA0wRQAtlfw8V1FryDY5sWfLdM'
    }
})

function getPatient(){
ax.get(baseURL)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default getPatient;