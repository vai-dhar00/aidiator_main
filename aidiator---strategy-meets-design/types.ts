
import React from 'react';

export interface ServicePillar {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
}

export interface Metric {
  label: string;
  value: string;
}