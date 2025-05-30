import { useState } from 'react';
import { motion } from 'framer-motion';

// Remember to add this to public/index.html:
// <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap" rel="stylesheet">

export default function TrainerWebsite() {
  const [form, setForm] = useState({ name: '', email: '', message: '', date: '' });
  const [reviews] = useState([
    { name: 'Emily', text: 'Pin is an amazing trainer! I have never felt stronger.' },
    { name: 'James', text: 'Her online sessions keep me motivated and on track.' },
    { name: 'Sophie', text: 'She really tailors the workouts to my needs. Highly recommend!' },
  ]);
  const [selectedDate, setSelectedDate] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ fontFamily: 'Open Sans, sans-serif', background: '#f9f9f9', padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.8rem', fontWeight: '600', color: '#ff6f61', marginBottom: '1.5rem', textAlign: 'center' }}>
        Welcome to Pin's Personal Training
      </motion.h1>

      {/* About Me */}
      <section style={{ marginBottom: '2rem', background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>About Pin</h2>
        <p>Hi, I'm Pin! I'm a certified personal trainer passionate about helping people achieve their fitness goals — whether online or in person. My approach focuses on making fitness fun, approachable, and personalized for each client. Let's move together and make your health journey exciting!</p>
      </section>

      {/* Booking Form */}
      <section style={{ marginBottom: '2rem', background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Book a Session</h2>
        <form action="https://formspree.io/f/yourformid" method="POST" style={{ display: 'grid', gap: '1rem' }}>
          <input placeholder="Your Name" name="name" value={form.name} onChange={handleChange} required style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }} />
          <input type="email" placeholder="Your Email" name="email" value={form.email} onChange={handleChange} required style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }} />
          <textarea placeholder="Tell us what you're looking for (online or in-person)" name="message" value={form.message} onChange={handleChange} required style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }} />
          <input type="date" name="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid #ccc' }} />
          <button type="submit" style={{ padding: '0.75rem 1rem', background: '#ff6f61', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>
            Submit Booking Request
          </button>
        </form>
      </section>

      {/* Reviews */}
      <section style={{ marginBottom: '2rem', background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>What Clients Are Saying</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {reviews.map((review, index) => (
            <div key={index} style={{ padding: '1rem', border: '1px solid #eee', borderRadius: '8px', background: '#fafafa' }}>
              <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{review.name}</p>
              <p style={{ fontStyle: 'italic' }}>"{review.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workout Gallery */}
      <section style={{ marginBottom: '2rem', background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Workout Gallery</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <img src="/workout1.jpg" alt="Workout 1" style={{ width: '100%', borderRadius: '12px' }} />
          <img src="/workout2.jpg" alt="Workout 2" style={{ width: '100%', borderRadius: '12px' }} />
          <img src="/workout3.jpg" alt="Workout 3" style={{ width: '100%', borderRadius: '12px' }} />
        </div>
      </section>

      {/* Payment Section */}
      <section style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Make a Payment</h2>
        <p style={{ marginBottom: '1rem' }}>Secure your booking by making a payment below.</p>
        <button onClick={() => window.location.href='https://buy.stripe.com/yourpaymentlink'} style={{ padding: '0.75rem 1.5rem', background: '#28a745', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>
          Pay Now
        </button>
      </section>
    </div>
  );
}
