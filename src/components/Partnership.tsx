import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Partnership = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="partnership" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              LET'S GROW
              <br />
              TOGETHER
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Whether you're an investor, buyer, NGO, or strategic partner, 
              we have opportunities for meaningful collaboration.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-growth-glow mt-1" />
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-white/80">partnerships@sustainablefarm.com</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-growth-glow mt-1" />
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-white/80">+233 20 123 4567</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-growth-glow mt-1" />
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-white/80">
                    123 Innovation Drive<br />
                    Accra, Ghana
                  </div>
                </div>
              </div>
            </div>

            <Button variant="outline-white" size="lg">
              Download Our Impact Report
            </Button>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Start a Conversation
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="bg-white/10 border-white/20 text-white placeholder-white/70"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email"
                        className="bg-white/10 border-white/20 text-white placeholder-white/70"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Organization name"
                      className="bg-white/10 border-white/20 text-white placeholder-white/70"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your organization and partnership interests..."
                      rows={4}
                      className="bg-white/10 border-white/20 text-white placeholder-white/70"
                      required
                    />
                  </div>
                  
                  <Button type="submit" variant="growth" size="lg" className="w-full group">
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;