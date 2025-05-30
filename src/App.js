import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TrainerWebsite() {
  const [form, setForm] = useState({ name: '', email: '', message: '', date: '' });
  const [reviews] = useState([
    { name: 'Emily', text: 'Pin is an amazing trainer! I’ve never felt stronger.' },
    { name: 'James', text: 'Her online sessions keep me motivated and on track.' },
    { name: 'Sophie', text: 'She really tailors the workouts to my needs. Highly recommend!' },
  ]);
  const [selectedDate, setSelectedDate] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! Your booking request for ${selectedDate || 'your chosen date'} has been submitted.`);
    setForm({ name: '', email: '', message: '', date: '' });
    setSelectedDate('');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Welcome to Pin’s Personal Training
      </motion.h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem' }}>Book a Session</h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
          <input placeholder="Your Name" name="name" value={form.name} onChange={handleChange} required />
          <input type="email" placeholder="Your Email" name="email" value={form.email} onChange={handleChange} required />
          <textarea placeholder="Tell us what you’re looking for (online or in-person)" name="message" value={form.message} onChange={handleChange} required />
          <input type="date" name="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
          <button type="submit" style={{ padding: '0.5rem 1rem' }}>Submit Booking Request</button>
        </form>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem' }}>What Clients Are Saying</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {reviews.map((review, index) => (
            <div key={index} style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
              <p style={{ fontWeight: '600' }}>{review.name}</p>
              <p>“{review.text}”</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem' }}>Workout Gallery</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
          <img src="/workout1.jpg" alt="Workout 1" style={{ width: '100%', borderRadius: '8px' }} />
          <img src="/workout2.jpg" alt="Workout 2" style={{ width: '100%', borderRadius: '8px' }} />
          <img src="/workout3.jpg" alt="Workout 3" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem' }}>Make a Payment</h2>
        <p style={{ marginBottom: '1rem' }}>Secure your booking by making a payment below.</p>
        <button onClick={() => alert('Redirecting to payment gateway...')} style={{ padding: '0.5rem 1rem' }}>Pay Now</button>
      </section>
    </div>
  );
}
