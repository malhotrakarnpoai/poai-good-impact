import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Calendar } from "lucide-react";

// Update this with your Make.com webhook URL
const WEBHOOK_URL = "https://hook.us2.make.com/ic43uwumva7g1ulnwpuz5enmewxvf2li";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number is too long"),
  portfolio: z.string().url("Please enter a valid URL").min(1, "Portfolio link is required"),
  attendanceMode: z.string().min(1, "Please select how you'll attend"),
  aboutYourself: z.string().optional(),
  aiQuestions: z.string().optional(),
  challenges: z.array(z.string()).min(1, "Please select at least one challenge to work on"),
  teamName: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to data storage to proceed",
  }),
});

type FormData = z.infer<typeof formSchema>;

const RegistrationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      portfolio: "",
      attendanceMode: "",
      aboutYourself: "",
      aiQuestions: "",
      challenges: [],
      teamName: "",
      consent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    
    try {
      console.log("Form data being sent:", data);
      
      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        portfolio: data.portfolio,
        attendanceMode: data.attendanceMode,
        aboutYourself: data.aboutYourself || "",
        aiQuestions: data.aiQuestions || "",
        challenges: data.challenges.join(", "),
        teamName: data.teamName || "",
        consent: data.consent,
        timestamp: new Date().toISOString(),
      };
      
      console.log("Payload being sent to webhook:", payload);
      
      // Send data to Make.com webhook
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      
      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Webhook error response:", errorText);
        throw new Error(`Webhook returned status ${response.status}`);
      }
      
      const responseData = await response.text();
      console.log("Webhook response:", responseData);
      
      setIsSubmitted(true);
      toast.success("Registration successful! Check your email for confirmation.");
    } catch (error) {
      console.error("Webhook error:", error);
      toast.error("Registration failed. Please try again or contact hello@poai.tech");
    } finally {
      setIsLoading(false);
    }
  };

  const addToCalendar = () => {
    const event = {
      title: "Poai Tech-For-Good Hackathon",
      description: "Join us for a day of innovation and impact",
      location: "Goa",
      startDate: "2024-11-15T10:00:00",
      endDate: "2024-11-15T18:00:00",
    };
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startDate.replace(/[-:]/g, '')}/${event.endDate.replace(/[-:]/g, '')}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  if (isSubmitted) {
    return (
      <section id="register" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-3xl shadow-card p-12 text-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-foreground">
                Thanks - you're registered!
              </h2>
              <p className="text-lg text-foreground/80">
                We'll send a confirmation email with event details & calendar invite.
              </p>
              <Button
                onClick={addToCalendar}
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Add to Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 scroll-mt-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Register Now
            </h2>
            <p className="text-lg text-muted-foreground">
              Join us on November 15th - secure your spot today
            </p>
          </div>

          <div className="bg-background rounded-3xl shadow-xl p-6 sm:p-10 lg:p-12 border border-border/50">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Information Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-foreground pb-2 border-b border-border/50">
                    Personal Information
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium text-sm">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="rounded-lg h-11 focus:ring-2 focus:ring-primary/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium text-sm">Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+91 98765 43210" {...field} className="rounded-lg h-11 focus:ring-2 focus:ring-primary/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium text-sm">Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} className="rounded-lg h-11 focus:ring-2 focus:ring-primary/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Event Details Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-foreground pb-2 border-b border-border/50">
                    Event Details
                  </h3>

                  <FormField
                    control={form.control}
                    name="attendanceMode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium text-sm">How will you join?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-lg h-11 focus:ring-2 focus:ring-primary/20">
                              <SelectValue placeholder="Choose attendance mode" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="in-person">In-person (Maverick&Farmer, Anjuna)</SelectItem>
                            <SelectItem value="online">Online (Zoom link via email)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="portfolio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium text-sm">LinkedIn / Github / Portfolio</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="https://linkedin.com/in/yourprofile" 
                            {...field} 
                            className="rounded-lg h-11 focus:ring-2 focus:ring-primary/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* About You Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-foreground pb-2 border-b border-border/50">
                    About You
                  </h3>

                  <FormField
                    control={form.control}
                    name="aboutYourself"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium text-sm">
                          Why are you interested in this hackathon?
                          <span className="text-muted-foreground font-normal ml-2">(Optional)</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your background and what excites you about this event..." 
                            {...field} 
                            className="rounded-lg min-h-[100px] focus:ring-2 focus:ring-primary/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="aiQuestions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium text-sm">
                          Any questions about building with AI?
                          <span className="text-muted-foreground font-normal ml-2">(Optional)</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Share your questions or curiosities about AI development..." 
                            {...field} 
                            className="rounded-lg min-h-[80px] focus:ring-2 focus:ring-primary/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Challenge Selection Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-foreground pb-2 border-b border-border/50">
                    Choose Your Challenge
                  </h3>

                  <FormField
                    control={form.control}
                    name="challenges"
                    render={() => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium text-sm mb-4 block">
                          Select one or more challenges you'd like to work on
                        </FormLabel>
                        <div className="space-y-3">
                          {[
                            { id: "fashion-circular", label: "Fashion Waste: Circular Design - Pre-Production & Concept Stage" },
                            { id: "fashion-postconsumer", label: "Fashion Waste: Post-Consumer Waste Management & Segregation" },
                            { id: "sustainable-habits", label: "Home Waste - Sustainable Habits : Digital Cues for Everyday Living" },
                            { id: "conscious-consumption", label: "Home Waste - Conscious Consumption : Long-term Engagement & Progress Tracking" },
                          ].map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="challenges"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={item.id}
                                    className="flex flex-row items-start space-x-3 space-y-0 p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-colors"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, item.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== item.id
                                                )
                                              );
                                        }}
                                        className="mt-0.5"
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal text-sm cursor-pointer leading-relaxed">
                                      {item.label}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="teamName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium text-sm">
                          Team Name
                          <span className="text-muted-foreground font-normal ml-2">(Optional - if registering as a team)</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., EcoInnovators" {...field} className="rounded-lg h-11 focus:ring-2 focus:ring-primary/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Consent and Submit */}
                <div className="space-y-6 pt-4">
                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-lg bg-muted/30 p-5 border border-border/50">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-0.5"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-foreground/90 font-normal cursor-pointer">
                            I consent to Poai storing my details for event communications
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full rounded-full text-lg h-14 shadow-lg hover:shadow-xl transition-all font-semibold"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin">⏳</span> Submitting...
                      </span>
                    ) : (
                      "Complete Registration"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
