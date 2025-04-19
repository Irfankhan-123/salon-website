document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Appointment Booked Successfully!');
  });

  
  
  document.getElementById('paymentType').addEventListener('change', function () {
    const cardDetails = document.getElementById('cardDetails');
    if (this.value === 'Credit Card') {
      cardDetails.style.display = 'block';
    } else {
      cardDetails.style.display = 'none';
    }
  });
  
  document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const paymentType = document.getElementById('paymentType').value;
    const qrContainer = document.getElementById('qrContainer');
  
    if (paymentType === 'UPI') {
      qrContainer.style.display = 'block'; // Show QR code
      alert('Please scan the QR code to complete your UPI payment.');
    } else {
      qrContainer.style.display = 'none'; // Hide QR if not UPI
      alert('Payment Successful!');
    }
  });
  document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('reviewerName').value;
    const message = document.getElementById('reviewMessage').value;
  
    if (name && message) {
      const reviewBox = document.createElement('div');
      reviewBox.classList.add('review');
      reviewBox.innerHTML = `<p>"${message}"</p><strong>- ${name}</strong>`;
  
      document.getElementById('submittedReviews').appendChild(reviewBox);
  
      // Clear form fields
      document.getElementById('reviewerName').value = '';
      document.getElementById('reviewMessage').value = '';
    }
  });

  
  document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('newsletterEmail');
    const message = document.getElementById('newsletterMessage');
  
    if (emailInput.value.includes('@')) {
      message.textContent = "Thanks for subscribing!";
      message.style.color = "green";
      emailInput.value = '';
    } else {
      message.textContent = "Please enter a valid email.";
      message.style.color = "red";
    }
  });
  


  