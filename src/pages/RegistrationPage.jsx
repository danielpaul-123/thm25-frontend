import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import StaggeredMenu from '../components/StaggeredMenu';
import Footer from '../components/Footer';
import Starfield from 'react-starfield';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Label } from '../components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';

// Zod validation schemas for each stage
const personalDetailsSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[1-9]\d{9,14}$/, 'Invalid phone number'),
  college: z.string().min(2, 'College name is required'),
  branch: z.string().min(2, 'Branch is required'),
  year: z.string().min(1, 'Year of study is required'),
  gender: z.enum(['male', 'female', 'other'], {
    required_error: 'Please select your gender',
  }),
});

const preferencesSchema = z.object({
  // workshopTrack: z.enum(['ai', 'embedded', 'cybersecurity'], {
  //   required_error: 'Please select a workshop track',
  // }),
  accommodation: z.enum(['yes', 'no'], {
    required_error: 'Please select accommodation preference',
  }),
  foodPreference: z.enum(['veg', 'non-veg'], {
    required_error: 'Please select food preference',
  }),
});

const membershipSchema = z.object({
  ieeeStatus: z.enum(['member', 'non-member'], {
    required_error: 'Please select your IEEE status',
  }),
  ieeeMembershipId: z.string().optional(),
  ticketType: z.enum(['899', '1399']),
}).refine((data) => {
  if (data.ieeeStatus === 'member' && !data.ieeeMembershipId) {
    return false;
  }
  return true;
}, {
  message: 'IEEE Membership ID is required for IEEE members',
  path: ['ieeeMembershipId'],
});

const paymentSchema = z.object({
  transactionScreenshot: z.any().refine((file) => file && file.length > 0, {
    message: 'Transaction screenshot is required',
  }),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
});

const stages = [
  { id: 1, name: 'Personal Details', description: 'Basic Information' },
  { id: 2, name: 'Preferences', description: 'Accommodation & Food Preferences' },
  { id: 3, name: 'Membership', description: 'IEEE Membership Details' },
  { id: 4, name: 'Payment', description: 'Complete Registration' },
];

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/#landing' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/#about' },
  { label: 'Features', ariaLabel: 'View features', link: '/#features' },
  { label: 'Schedule', ariaLabel: 'View schedule', link: '/#schedule' },
  { label: 'Tickets', ariaLabel: 'Register now', link: '/#registration' },
  { label: 'Gallery', ariaLabel: 'View gallery', link: '/#gallery' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/#contact' }
];

const socialItems = [
  { label: 'Instagram', link: 'https://www.instagram.com/ieeetravancorehub' },
  { label: 'Facebook', link: 'https://www.facebook.com/ieeelink' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/company/ieee-travancore-hub/' }
];

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [currentStage, setCurrentStage] = useState(1);
  const [formData, setFormData] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [soldOutDialogOpen, setSoldOutDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', description: '', type: 'success' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check ticket availability on mount
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/tickets/availability`, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(result => {
        if (result.success && result.data.status === 'closed') {
          setSoldOutDialogOpen(true);
        }
      })
      .catch(error => {
        console.warn('Unable to check ticket availability. CORS error or network issue:', error.message);
        console.warn('Backend needs CORS configuration. Allowing registration to proceed.');
        // Default to allowing registration on error
      });
  }, []);

  // Get current schema based on stage
  const getCurrentSchema = () => {
    switch (currentStage) {
      case 1:
        return personalDetailsSchema;
      case 2:
        return preferencesSchema;
      case 3:
        return membershipSchema;
      case 4:
        return paymentSchema;
      default:
        return personalDetailsSchema;
    }
  };

  const form = useForm({
    resolver: zodResolver(getCurrentSchema()),
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    const updatedData = { ...formData, ...data };
    setFormData(updatedData);

    if (currentStage < 4) {
      setCurrentStage(currentStage + 1);
      form.reset(updatedData);
    } else {
      // Final submission - transform ticketType to ieee/non-ieee before sending
      const submissionData = {
        ...updatedData,
        ticketType: updatedData.ieeeStatus === 'member' ? 'ieee' : 'non-ieee'
      };
      
      // Send to backend API
      const apiUrl = import.meta.env.VITE_API_URL;
      const formDataToSend = new FormData();
      
      // Append all form fields
      Object.keys(submissionData).forEach(key => {
        if (key === 'transactionScreenshot' && submissionData[key]) {
          formDataToSend.append(key, submissionData[key][0]); // File object
        } else {
          formDataToSend.append(key, submissionData[key]);
        }
      });
      
      setIsSubmitting(true);
      
      fetch(`${apiUrl}/register`, {
        method: 'POST',
        body: formDataToSend,
      })
        .then(response => {
          if (!response.ok) {
            return response.json().then(err => {
              throw { status: response.status, data: err };
            });
          }
          return response.json();
        })
        .then(result => {
          console.log('Registration successful:', result);
          setDialogContent({
            title: 'Registration Successful!',
            description: `Your registration has been submitted successfully.\n\nTicket ID: ${result.data?.shortTicketId || 'Pending'}\nEmail: ${result.data?.email || updatedData.email}\n\n`,
            type: 'success'
          });
          setDialogOpen(true);
        })
        .catch(error => {
          console.error('Registration error:', error);
          
          let title = 'Registration Failed';
          let description = 'An unexpected error occurred. Please try again.';
          
          // Handle different error types
          if (error.status === 429) {
            title = 'Too Many Attempts';
            description = error.data?.message || 'Too many registration attempts. Please try again later.';
          } else if (error.status === 400) {
            // Validation errors
            if (error.data?.errors && Array.isArray(error.data.errors)) {
              title = 'Validation Failed';
              description = 'Please correct the following issues:\n\n' + error.data.errors.map(err => `• ${err}`).join('\n');
            }
            // Duplicate email
            else if (error.data?.message?.includes('Email already')) {
              title = 'Email Already Registered';
              description = error.data?.error || 'This email address has already been used for registration. Please use a different email or contact support.';
            }
            // Duplicate key error
            else if (error.data?.message?.includes('already exists')) {
              title = 'Registration Already Exists';
              description = error.data?.error || 'This email or registration already exists in the system.';
            }
            // File upload errors
            else if (error.data?.message?.includes('File')) {
              title = 'File Upload Error';
              description = error.data?.error || 'There was an error uploading your transaction screenshot. Please ensure the file is a valid image and under 5MB.';
            }
            else {
              description = error.data?.error || error.data?.message || 'There was an error with your submission. Please check your information and try again.';
            }
          } else if (error.status === 500) {
            title = 'Server Error';
            description = 'Our server encountered an error. Please try again in a few moments or contact support if the issue persists.';
          } else if (error.message) {
            description = error.message;
          }
          
          setDialogContent({
            title,
            description,
            type: 'error'
          });
          setDialogOpen(true);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  const handlePrevious = () => {
    if (currentStage > 1) {
      setCurrentStage(currentStage - 1);
      form.reset(formData);
    }
  };

  const ieeeStatus = form.watch('ieeeStatus');

  return (
    <div className="min-h-screen bg-black relative">
      {/* Starfield Background */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.1}
          backgroundColor="black"
        />
      </div>

      {/* Content on top of starfield */}
      <div className="relative z-10">
        {/* Header */}
        <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={false}
        colors={['#76f9a4', '#5abe7d', '#021921']}
        logoUrl="/logo.webp"
        accentColor="#5abe7d"
        isFixed={true}
      />

      {/* Main Content */}
      <main className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Event Registration
            </h1>
            <p className="text-lg text-gray-300">
              Complete your registration for THM 2025
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Side - Stage Indicator */}
            <div className="lg:col-span-4">
              {/* Mobile: Horizontal stage numbers only */}
              <div className="lg:hidden flex justify-center gap-4 mb-6">
                {stages.map((stage, index) => (
                  <div key={stage.id} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                        currentStage === stage.id
                          ? 'bg-[#00d693] text-black'
                          : currentStage > stage.id
                          ? 'bg-white/20 text-white'
                          : 'bg-white/10 text-gray-400'
                      }`}
                    >
                      {currentStage > stage.id ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        stage.id
                      )}
                    </div>
                    {index < stages.length - 1 && (
                      <div className={`w-8 h-0.5 ${currentStage > stage.id ? 'bg-white/20' : 'bg-white/10'}`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Desktop: Full stage details */}
              <div className="sticky top-24 space-y-4 hidden lg:block">
                {stages.map((stage) => (
                  <div
                    key={stage.id}
                    className={`p-4 rounded-lg border transition-all ${
                      currentStage === stage.id
                        ? 'bg-[#00d693]/10 border-[#00d693]'
                        : currentStage > stage.id
                        ? 'bg-white/5 border-white/20'
                        : 'bg-transparent border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                          currentStage === stage.id
                            ? 'bg-[#00d693] text-black'
                            : currentStage > stage.id
                            ? 'bg-white/20 text-white'
                            : 'bg-white/10 text-gray-400'
                        }`}
                      >
                        {currentStage > stage.id ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          stage.id
                        )}
                      </div>
                      <div>
                        <h3 className={`font-semibold ${currentStage >= stage.id ? 'text-white' : 'text-gray-400'}`}>
                          {stage.name}
                        </h3>
                        <p className="text-sm text-gray-400">{stage.description}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Price Summary - Desktop only */}
                {formData.ticketType && (
                  <div className="mt-8 p-4 rounded-lg bg-[#00d693]/10 border border-[#00d693]">
                    <h4 className="font-semibold text-white mb-2">Registration Summary</h4>
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>Ticket Type:</span>
                      <span>{formData.ieeeStatus === 'member' ? 'IEEE Member' : 'Non-IEEE'}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-white mt-2">
                      <span>Total:</span>
                      <span>₹{formData.ticketType}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:col-span-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Stage 1: Personal Details */}
                    {currentStage === 1 && (
                      <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white mb-6">Personal Details</h2>
                        
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your full name" {...field} />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="+91 9876543210" {...field} />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="college"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">College/Institution *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your college name" {...field} />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="branch"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Branch *</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g., Computer Science" {...field} />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="year"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Year of Study *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select year" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="1">First Year</SelectItem>
                                    <SelectItem value="2">Second Year</SelectItem>
                                    <SelectItem value="3">Third Year</SelectItem>
                                    <SelectItem value="4">Fourth Year</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage className="text-red-400" />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="gender"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-white">Gender *</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex gap-4"
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="male" id="gender-male" />
                                    <Label htmlFor="gender-male" className="text-white cursor-pointer">Male</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="female" id="gender-female" />
                                    <Label htmlFor="gender-female" className="text-white cursor-pointer">Female</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="other" id="gender-other" />
                                    <Label htmlFor="gender-other" className="text-white cursor-pointer">Other</Label>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}

                    {/* Stage 2: Preferences */}
                    {currentStage === 2 && (
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white mb-6">Preferences</h2>

                        {/* <FormField
                          control={form.control}
                          name="workshopTrack"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-white text-lg">Workshop Track *</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex flex-col space-y-3"
                                >
                                  <div className="flex items-start space-x-3 p-4 rounded-lg border border-white/20 hover:border-[#00d693]/50 transition-colors">
                                    <RadioGroupItem value="ai" id="ai" />
                                    <div className="flex-1">
                                      <Label htmlFor="ai" className="text-white font-medium cursor-pointer">
                                        Artificial Intelligence
                                      </Label>
                                      <p className="text-sm text-gray-400 mt-1">
                                        Learn about machine learning, neural networks, and AI applications
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-start space-x-3 p-4 rounded-lg border border-white/20 hover:border-[#00d693]/50 transition-colors">
                                    <RadioGroupItem value="embedded" id="embedded" />
                                    <div className="flex-1">
                                      <Label htmlFor="embedded" className="text-white font-medium cursor-pointer">
                                        Embedded Systems
                                      </Label>
                                      <p className="text-sm text-gray-400 mt-1">
                                        Hands-on experience with IoT, microcontrollers, and embedded programming
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-start space-x-3 p-4 rounded-lg border border-white/20 hover:border-[#00d693]/50 transition-colors">
                                    <RadioGroupItem value="cybersecurity" id="cybersecurity" />
                                    <div className="flex-1">
                                      <Label htmlFor="cybersecurity" className="text-white font-medium cursor-pointer">
                                        Cybersecurity
                                      </Label>
                                      <p className="text-sm text-gray-400 mt-1">
                                        Network security, ethical hacking, and security best practices
                                      </p>
                                    </div>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        /> */}

                        <FormField
                          control={form.control}
                          name="accommodation"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-white text-lg">Accommodation Required? *</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex gap-4"
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="yes" id="acc-yes" />
                                    <Label htmlFor="acc-yes" className="text-white cursor-pointer">Yes</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="no" id="acc-no" />
                                    <Label htmlFor="acc-no" className="text-white cursor-pointer">No</Label>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="foodPreference"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-white text-lg">Food Preference *</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex gap-4"
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="veg" id="food-veg" />
                                    <Label htmlFor="food-veg" className="text-white cursor-pointer">Vegetarian</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="non-veg" id="food-non-veg" />
                                    <Label htmlFor="food-non-veg" className="text-white cursor-pointer">Non-Vegetarian</Label>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}

                    {/* Stage 3: Membership */}
                    {currentStage === 3 && (
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white mb-6">Membership Details</h2>

                        <FormField
                          control={form.control}
                          name="ieeeStatus"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-white text-lg">IEEE Membership Status *</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={(value) => {
                                    field.onChange(value);
                                    form.setValue('ticketType', value === 'member' ? '899' : '1399');
                                  }}
                                  defaultValue={field.value}
                                  className="flex flex-col space-y-3"
                                >
                                  <div className="flex items-start space-x-3 p-4 rounded-lg border border-[#00d693]/50 bg-[#00d693]/10">
                                    <RadioGroupItem value="member" id="ieee-member" />
                                    <div className="flex-1">
                                      <Label htmlFor="ieee-member" className="text-white font-medium cursor-pointer">
                                        IEEE Member - ₹899
                                      </Label>
                                      <p className="text-sm text-gray-400 mt-1">
                                        Includes IEEE membership perks and all event benefits
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-start space-x-3 p-4 rounded-lg border border-white/20">
                                    <RadioGroupItem value="non-member" id="ieee-non-member" />
                                    <div className="flex-1">
                                      <Label htmlFor="ieee-non-member" className="text-white font-medium cursor-pointer">
                                        Non-IEEE Member - ₹1399
                                      </Label>
                                      <p className="text-sm text-gray-400 mt-1">
                                        Includes all event benefits except IEEE membership perks
                                      </p>
                                    </div>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />

                        {ieeeStatus === 'member' && (
                          <FormField
                            control={form.control}
                            name="ieeeMembershipId"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">IEEE Membership ID *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your IEEE membership ID" {...field} />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                              </FormItem>
                            )}
                          />
                        )}

                        <div className="p-4 rounded-lg bg-white/5 border border-white/20">
                          <h3 className="text-white font-semibold mb-3">Your ticket includes:</h3>
                          <ul className="space-y-2 text-gray-300 text-sm">
                            <li className="flex items-start gap-2">
                              <svg className="w-5 h-5 text-[#00d693] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Access to all workshop tracks
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="w-5 h-5 text-[#00d693] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Meals and refreshments
                            </li>
                            <li className="flex items-start gap-2">
                              <svg className="w-5 h-5 text-[#00d693] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Event kit and certificate
                            </li>
                            {ieeeStatus === 'member' && (
                              <li className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-[#00d693] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-[#00d693] font-semibold">IEEE Membership perks</span>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Stage 4: Payment */}
                    {currentStage === 4 && (
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white mb-6">Payment Details</h2>

                        <div className="p-6 rounded-lg bg-[#00d693]/10 border border-[#00d693]">
                          <h3 className="text-white font-semibold mb-4">UPI Payment Instructions</h3>
                          <div className="space-y-3 text-gray-300 text-sm">
                            <p>Scan the QR code below to pay ₹{formData.ticketType} via UPI:</p>
                            <div className="w-48 h-48 bg-white/10 rounded-lg flex items-center justify-center overflow-hidden mx-auto">
                              <img 
                                src={`/${formData.ticketType}.webp`} 
                                alt={`QR Code for ₹${formData.ticketType} payment`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p className="text-yellow-400 text-center mt-4">After payment, upload a screenshot of your transaction below</p>
                          </div>
                        </div>

                        <FormField
                          control={form.control}
                          name="transactionScreenshot"
                          render={({ field: { onChange, value, ...field } }) => (
                            <FormItem>
                              <FormLabel className="text-white">Transaction Screenshot *</FormLabel>
                              <FormControl>
                                <Input 
                                  type="file" 
                                  accept="image/*"
                                  onChange={(e) => onChange(e.target.files)}
                                  {...field}
                                />
                              </FormControl>
                              <p className="text-sm text-gray-400">Upload a screenshot of your payment confirmation</p>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="agreeToTerms"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <input
                                  type="checkbox"
                                  checked={field.value}
                                  onChange={field.onChange}
                                  className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 text-[#00d693] focus:ring-2 focus:ring-[#00d693]"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-white cursor-pointer">
                                  I agree to the terms and conditions *
                                </FormLabel>
                                <p className="text-sm text-gray-400">
                                  By registering, you agree to our event policies and guidelines and provide your consent to the organizers to use your contact details provided in the form to contact you for updates regarding this event.
                                </p>
                                <FormMessage className="text-red-400" />
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6 border-t border-white/10">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrevious}
                        disabled={currentStage === 1}
                        className="bg-transparent border-white/20 text-white hover:bg-white/10"
                      >
                        Previous
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-linear-to-r from-[#00d693] to-[#048163] hover:shadow-lg hover:shadow-[#00d693]/50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          currentStage === 4 ? 'Submit Registration' : 'Next'
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>

              {/* Price Summary - Mobile only, at bottom */}
              {formData.ticketType && (
                <div className="mt-6 p-4 rounded-lg bg-[#00d693]/10 border border-[#00d693] lg:hidden">
                  <h4 className="font-semibold text-white mb-2">Registration Summary</h4>
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>Ticket Type:</span>
                    <span>{formData.ieeeStatus === 'member' ? 'IEEE Member' : 'Non-IEEE'}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-white mt-2">
                    <span>Total:</span>
                    <span>₹{formData.ticketType}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Status Dialog */}
      {/* Sold Out Dialog */}
      <Dialog open={soldOutDialogOpen} onOpenChange={() => {
        setSoldOutDialogOpen(false);
        navigate('/');
      }}>
        <DialogContent className="bg-black/95 border-white/20 text-white">
          <DialogHeader>
            <DialogTitle className="text-red-400">
              Tickets Sold Out
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              We're sorry, but all tickets for THM 2025 have been sold out. Thank you for your interest!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end mt-4">
            <Button
              onClick={() => {
                setSoldOutDialogOpen(false);
                navigate('/');
              }}
              className="bg-[#00d693] hover:bg-[#00d693]/90 text-black"
            >
              Go to Home
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success/Error Dialog */}
      <Dialog open={dialogOpen} onOpenChange={(open) => {
        setDialogOpen(open);
        if (!open && dialogContent.type === 'success') {
          navigate('/');
        }
      }}>
        <DialogContent className="bg-black/95 border-white/20 text-white">
          <DialogHeader>
            <DialogTitle className={dialogContent.type === 'success' ? 'text-[#00d693]' : 'text-red-400'}>
              {dialogContent.title}
            </DialogTitle>
            <DialogDescription className="text-gray-300 whitespace-pre-line">
              {dialogContent.description}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-3 mt-4">
            {dialogContent.type === 'success' && (
              <Button
                onClick={() => {
                  setDialogOpen(false);
                  navigate('/');
                }}
                className="bg-[#00d693] hover:bg-[#00d693]/90 text-black"
              >
                Go to Home
              </Button>
            )}
            {dialogContent.type === 'error' && (
              <Button
                onClick={() => setDialogOpen(false)}
                className="bg-white/10 hover:bg-white/20 text-white"
              >
                Close
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
      </div>
    </div>
  );
};

export default RegistrationPage;
