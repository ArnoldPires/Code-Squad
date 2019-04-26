function advice() {
  let name = prompt('First Name');
  let questionTwo = prompt('Do you feel like other people always understand new coding concepts faster or better than you? (Type Yes/No)');
  let questionThree = prompt('Are you smart enough to be a developer? (Type Yes/No)');
  let questionFour = prompt("Do other people think you're a bad coder? (Type Yes/No)");
  let questionFive = prompt('Has your code failed? (Type Yes/No)');
  let advice = "<p><strong>Your Name:</strong></p>" + "Hi " + name + ", you are already a web developer.";
    if (questionTwo === 'yes') {
      advice += "<p><strong>It's gonna be okay:</strong></p><p>No one is ever an expert in software development. There will always be more to learn, which means there will always be someone who knows something you don’t. Instead of thinking about what <em>they</em> know, focus on your own skills and knowledge. You will never know everything; instead, try to get comfortable with being uncomfortable. Go after what you don't know. Use it to fuel your growth, not your self-doubt.</p>";
    }
    if (questionThree === 'no') {
      advice += "<p><strong>Adopt a growth mindset:</strong></p><p>In her book, <em>The New Psychology of Success</em>, author Carol Dweck theorizes that some people have a <em>fixed mindset</em>, believing that intelligence is fixed at birth. These people think that the smarter you are, the easier you understand things. But Dweck believes that intelligence is directly tied to effort and challenge. By adopting a <em>growth mindset</em>, you can view obstacles as opportunities to learn, to help you improve. If you're feeling inadequate, it's a signal that you’re being challenged. This is an opportunity to learn, to become better, and to grow.</p>";
    }
    if (questionFour === 'yes') {
      advice += "<p><strong>Ask others for feedback:</strong></p><p>Impostor syndrome thrives when all you do is think. Ask your boss, or a colleague or mentor who you trust, what they think you’re doing well. Then ask if there is anything specific they feel you need to work on in the short-term, and what measurable goals you might set to judge if you improved. Try setting some longer-term (3-6 months), measurable goals with them as well.</p>";
    }
   if (questionFive === 'yes') {
     advice += "<p><strong>Reflect on your successes:</strong></p><p>You might be thinking about a project, or some code you wrote, that failed. Instead, try spending 20 minutes reflecting on your successes so far, and remind yourself of how far you’ve come. This will help balance the scales of positive vs negative self-talk that is at the heart of impostor syndrome.</p>";
   }
  document.getElementById("advice").innerHTML = advice;
}
