'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Send, Loader2 } from 'lucide-react';
import styles from './ContactForm.module.scss';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  estimatedBudget: string;
  location: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Commercial High-Rise',
    estimatedBudget: '$20M - $50M',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.company.trim()) errs.company = 'Company / Institutional entity is required.';
    if (!formData.email.trim()) {
      errs.email = 'Corporate email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid corporate email format.';
    }
    if (!formData.phone.trim()) errs.phone = 'Direct phone number is required.';
    if (!formData.location.trim()) errs.location = 'Project site city / country is required.';
    if (!formData.message.trim() || formData.message.trim().length < 20) {
      errs.message = 'Please provide preliminary project scope details (minimum 20 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate enterprise backend submission delay
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className={styles.formContainer}>
      {isSuccess ? (
        <div className={styles.successState}>
          <div className={styles.successIconWrapper}>
            <CheckCircle2 size={48} className={styles.successIcon} />
          </div>
          <h3 className={styles.successTitle}>INQUIRY REGISTERED</h3>
          <p className={styles.successText}>
            Thank you, {formData.name}. Your tender brief for{' '}
            <strong>{formData.company}</strong> ({formData.location}) has been routed to our
            Director of Engineering. We will review the technical parameters and respond
            within 24 business hours.
          </p>
          <div className={styles.ticketId}>
            <span>SUBMISSION REFERENCE:</span>
            <strong>VNTR-{Math.floor(100000 + Math.random() * 900000)}</strong>
          </div>
          <button
            type="button"
            className={styles.resetBtn}
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                projectType: 'Commercial High-Rise',
                estimatedBudget: '$20M - $50M',
                location: '',
                message: '',
              });
            }}
          >
            SUBMIT ANOTHER TENDER BRIEF
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <div className={styles.formRow}>
            {/* Full Name */}
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>
                FULL NAME <span className={styles.req}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Marcus Sterling"
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
              />
              {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
            </div>

            {/* Company */}
            <div className={styles.inputGroup}>
              <label htmlFor="company" className={styles.label}>
                COMPANY / ENTITY <span className={styles.req}>*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Apex Global Real Estate"
                className={`${styles.input} ${errors.company ? styles.inputError : ''}`}
              />
              {errors.company && <span className={styles.errorMsg}>{errors.company}</span>}
            </div>
          </div>

          <div className={styles.formRow}>
            {/* Email */}
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                CORPORATE EMAIL <span className={styles.req}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="m.sterling@apexrealty.com"
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              />
              {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
            </div>

            {/* Phone */}
            <div className={styles.inputGroup}>
              <label htmlFor="phone" className={styles.label}>
                PHONE NUMBER <span className={styles.req}>*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 019-2834"
                className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
              />
              {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
            </div>
          </div>

          <div className={styles.formRow}>
            {/* Project Type */}
            <div className={styles.inputGroup}>
              <label htmlFor="projectType" className={styles.label}>
                PROJECT DISCIPLINE
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="Residential High-Rise">Residential High-Rise</option>
                <option value="Commercial High-Rise">Commercial Corporate Headquarters</option>
                <option value="Luxury Hospitality">Luxury Hospitality & Resort</option>
                <option value="Civil Infrastructure">Heavy Civil & Bridges</option>
                <option value="Industrial Logistics">Industrial & Automated Hub</option>
                <option value="Turnkey General Contracting">Turnkey General Contracting</option>
              </select>
            </div>

            {/* Estimated Budget */}
            <div className={styles.inputGroup}>
              <label htmlFor="estimatedBudget" className={styles.label}>
                ESTIMATED CAPITAL BUDGET
              </label>
              <select
                id="estimatedBudget"
                name="estimatedBudget"
                value={formData.estimatedBudget}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="$5M - $15M">$5,000,000 — $15,000,000</option>
                <option value="$15M - $30M">$15,000,000 — $30,000,000</option>
                <option value="$30M - $75M">$30,000,000 — $75,000,000</option>
                <option value="$75M - $200M+">$75,000,000 — $200,000,000+</option>
              </select>
            </div>
          </div>

          {/* Project Location */}
          <div className={styles.inputGroup}>
            <label htmlFor="location" className={styles.label}>
              PROPOSED SITE LOCATION (CITY, COUNTRY) <span className={styles.req}>*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. London, UK / Zurich, Switzerland / Dubai, UAE"
              className={`${styles.input} ${errors.location ? styles.inputError : ''}`}
            />
            {errors.location && <span className={styles.errorMsg}>{errors.location}</span>}
          </div>

          {/* Message / Scope */}
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>
              PROJECT SCOPE & TIMELINE REQUIREMENTS <span className={styles.req}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Outline target square meters, architectural status, anticipated groundbreaking date, and required delivery format..."
              className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
            />
            {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.submitButton}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className={styles.spinner} />
                <span>PROCESSING TENDER BRIEF...</span>
              </>
            ) : (
              <>
                <span>TRANSMIT PROJECT DOSSIER</span>
                <Send size={16} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
