const IndentStream = require('../');
const should = require('should');

describe('basic test', () => {
    it('should indent text', (done) => {
        let original = 'if (true) {for (let i = 0; i < 10; i++){console.log(a[i]);}}';
        let expected = `if (
   true
)
 {
   for (
      let i = 0; i < 10; i++
   )
   {
      console.log(
         a[
            i
         ]
         
      )
      ;
   }
   
}
`;

        let stream = new IndentStream();
        stream.end(original, 'utf-8');

        let intentedData = '';
        stream.on('data', (chunk) => {
            intentedData += chunk.toString('utf-8');
            console.log(intentedData);
        });
        stream.on('end', () => {
            intentedData.should.be.eql(expected)

            done();
        });

    });
});