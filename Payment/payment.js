function payment() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;
    // var mode = document.getElementById('mode').value;

    Email.send({
        Host: "smtp.gmail.com",
        Username: `supertechno224@gmail.com`,
        Password: `io.Super@@Techno`,
        To: `${email}`,
        From: "supertechno224@gmail.com",
        Subject: `Donation Successful!`,
        Body: `Hi ${name},<br><br>
        Thank you very much for donating an amount of <b>Rs. ${amount}</b> to Super Techno Industries. We truly and sincerely appreciate your support of our mission.<br><br>
        Thanking you. <br><br>
        Yours faithfully,<br>
        Abhishek Verma<br>
        Founder - Super Techno Industries`,
    }).then((message) => alert("Payment successful"));
}