/**
 * @Created Jan 25, 2018
 * @LastUpdate Jan 31, 2020
 * @author Kahin Akram
 */

queue()
  .defer(d3.csv,'data/BankChurnModified.csv')
  .await(draw);

var pc;

function draw(error, data){
  if (error) throw error;

  //Test different data at the end!
  pc = new Parallel_sets(data);

}
