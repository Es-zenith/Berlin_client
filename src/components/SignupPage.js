import React from 'react';
import { Form, Input, Button } from 'antd'; // import form components from Ant Design
import { useState } from 'react'; // import the useState hook

function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Send a signup request to the server
    fetch('/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password, email }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          // Signup was successful, show a success message and redirect to the login page
          alert('Signup successful! Please log in to continue.');
          // Redirect to the login page
          window.location.replace('/login');
        } else {
          // Signup failed, show an error message
          alert('Signup failed. Please try again.');
        }
      });
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Item label="Username">
          <Input
            type="text"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Password">
          <Input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignupPage;
