
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, FileText, AlertTriangle, Scale, Gavel } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Scale className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-serif font-bold">LegalDrivenDesign</span>
            <Badge variant="secondary" className="bg-blue-600 text-white">LDD™</Badge>
          </div>
          <div className="hidden md:flex space-x-8 text-sm">
            <a href="#features" className="hover:text-blue-400 transition-colors">Framework</a>
            <a href="#case-studies" className="hover:text-blue-400 transition-colors">Case Studies</a>
            <a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a>
            <a href="#resources" className="hover:text-blue-400 transition-colors">Resources</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Badge className="bg-yellow-500 text-black font-semibold mb-4">
              REVOLUTIONARY FRAMEWORK
            </Badge>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              LegalDrivenDesign<sup className="text-2xl">™</sup>
            </h1>
            <p className="text-xl md:text-2xl font-serif mb-8 text-blue-200">
              "Because your users don't matter—your legal team does."
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-300 mb-8">
              The premier design methodology that puts compliance first, user experience second, 
              and actual usability somewhere around page 47 of the terms and conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3">
                Download 42-Page Whitepaper*
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3">
                Schedule Legal Audit
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              *Subject to 14-day review period and legal approval
            </p>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">847%</div>
              <div className="text-sm text-gray-300">Increase in Legal Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">23 Steps</div>
              <div className="text-sm text-gray-300">Average Login Process</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400">0.02%</div>
              <div className="text-sm text-gray-300">User Comprehension Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">
              Core Principles of LDD™
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovating within the boundaries of section 14.9(b) of the user agreement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <CardTitle className="font-serif">Legal First</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every pixel must be pre-approved by at least three different legal departments 
                  before user testing can even be considered.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <CardTitle className="font-serif">Documentation Heavy</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Why use one sentence when you can use a 47-page addendum with 
                  cross-references to international maritime law?
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  <CardTitle className="font-serif">Risk Averse</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  If there's even a 0.001% chance a user might misunderstand something, 
                  add seventeen more disclaimers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              "Every modal has a lawyer behind it."
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-slate-900 mb-2">
                    Consent Walls So Thick, No One Gets In
                  </h3>
                  <p className="text-gray-600">
                    Our patent-pending ConsentFortress™ technology ensures users face a minimum 
                    of 73 different permission requests before accessing any functionality. 
                    Includes GDPR, CCPA, PIPEDA, and 47 other compliance frameworks you've never heard of.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg flex-shrink-0">
                  <FileText className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-slate-900 mb-2">
                    Checkboxes Inside Dropdowns Inside Disclaimers
                  </h3>
                  <p className="text-gray-600">
                    Why make consent simple? Our nested permission architecture requires users 
                    to navigate through multiple layers of legal agreements, each with their own 
                    sub-agreements and conditional terms.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-slate-900 mb-2">
                    Privacy Banners That Obscure the Entire Product
                  </h3>
                  <p className="text-gray-600">
                    Our FullScreen Privacy Portal™ ensures that legal compliance takes up 
                    127% of the viewport. Users can still access your product—they just need 
                    to scroll through 14 pages of cookie preferences first.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <Gavel className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-slate-900 mb-2">
                    Liability-Proof Button Labels
                  </h3>
                  <p className="text-gray-600">
                    Instead of "Submit," try "Irrevocably Commit to Binding Arbitration 
                    (Subject to Terms)." Our legal team has pre-approved 47,000 button 
                    variations to minimize litigation risk.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 p-8 rounded-lg">
              <h4 className="text-lg font-serif font-semibold text-slate-900 mb-4">
                Sample User Journey
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>User visits homepage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Age verification modal appears</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Cookie preferences (23 categories)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Terms of Service agreement</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Privacy Policy acknowledgment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Newsletter consent (legally distinct)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Marketing preferences sub-menu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Account creation eligibility quiz</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-yellow-600" />
                  <span>User abandons site (98.7% success rate)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real companies with real legal departments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2 border-slate-200">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">
                  The 12-Step GDPR Odyssey
                </CardTitle>
                <CardDescription className="text-lg">
                  How we turned a 2-step signup into a compliance masterpiece
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Challenge:</h4>
                  <p className="text-sm text-gray-700">
                    EcoTech Solutions had a dangerously simple signup process. Users could 
                    create accounts in just 2 clicks, leaving them vulnerable to understanding 
                    what they were agreeing to.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Solution:</h4>
                  <p className="text-sm text-gray-700">
                    Our LDD™ methodology expanded the signup flow to include 12 distinct legal 
                    checkpoints, 47 sub-agreements, and a mandatory 15-minute video on data 
                    processing rights.
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Results:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Signup completion rate: 0.3% (down from 78%)</li>
                    <li>• Legal compliance score: 847% improvement</li>
                    <li>• Average time to complete: 47 minutes</li>
                    <li>• User satisfaction: Not measured (liability risk)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">
                  The Infinite Scroll Terms
                </CardTitle>
                <CardDescription className="text-lg">
                  Why our Terms of Service scroll length increased engagement by 0%
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Challenge:</h4>
                  <p className="text-sm text-gray-700">
                    FinanceFlow's original terms were only 12 pages long, creating dangerous 
                    clarity that could lead to user comprehension and potential disputes.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Solution:</h4>
                  <p className="text-sm text-gray-700">
                    We expanded their terms to 847 pages, including subsections covering 
                    interplanetary commerce law and medieval guild regulations (just in case).
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Results:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Terms acceptance rate: 99.97% (nobody reads them)</li>
                    <li>• User comprehension: Effectively eliminated</li>
                    <li>• Legal loopholes closed: 15,847</li>
                    <li>• Scroll engagement: Increased by 0%</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">
              What Legal Teams Are Saying
            </h2>
            <p className="text-xl text-gray-600">
              Testimonials from actual legal professionals who prioritize compliance over usability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-slate-200 bg-slate-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⚖️</span>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 font-serif italic">
                  "Our bounce rate skyrocketed to 97.3%—mission accomplished! 
                  LDD™ helped us create the most legally bulletproof user experience 
                  that nobody can actually use."
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-slate-900">Margaret Disclamer</div>
                  <div className="text-sm text-gray-600">Senior Counsel, Risk Avoidance Dept.</div>
                  <div className="text-xs text-gray-500">MegaCorp Legal Holdings</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 bg-slate-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⚖️</span>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 font-serif italic">
                  "Our users don't understand our interface, and that's exactly how we like it. 
                  Confusion is the best defense against litigation. LDD™ made our app 
                  beautifully incomprehensible."
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-slate-900">Bradley Obfuscate</div>
                  <div className="text-sm text-gray-600">Lead Regulatory Designer</div>
                  <div className="text-xs text-gray-500">ComplianceFirst Solutions</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 bg-slate-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⚖️</span>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 font-serif italic">
                  "We haven't had a single user complaint in months! Mainly because nobody 
                  can figure out how to contact us through our 23-step support request form. 
                  LDD™ is genius!"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-slate-900">Jessica Barrier-Gate</div>
                  <div className="text-sm text-gray-600">Chief Privacy Architect</div>
                  <div className="text-xs text-gray-500">SecureShield Enterprises</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="resources" className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Legally Optimize Your UX?
          </h2>
          <p className="text-xl text-blue-200 mb-12 max-w-3xl mx-auto">
            Join thousands of legal teams who have successfully eliminated user satisfaction 
            while maximizing compliance scores.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white text-slate-900 border-0">
              <CardHeader>
                <CardTitle className="font-serif flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <span>Free Resources</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-left space-y-2">
                  <p className="text-sm">📋 "Button Label Liability" - 42-page whitepaper</p>
                  <p className="text-sm">📊 "Modal Emotional Neutrality" - Compliance audit</p>
                  <p className="text-sm">📖 "Terms of Service Optimization" - 847-page guide</p>
                  <p className="text-sm">🎯 "User Confusion Metrics" - Analytics framework</p>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Download All Resources*
                </Button>
                <p className="text-xs text-gray-500">
                  *Requires legal review and 14-day waiting period
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white text-slate-900 border-0">
              <CardHeader>
                <CardTitle className="font-serif flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-green-600" />
                  <span>Consultation</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-left space-y-2">
                  <p className="text-sm">⚖️ Free UX compliance audit</p>
                  <p className="text-sm">📝 Modal liability assessment</p>
                  <p className="text-sm">🔒 Privacy banner optimization</p>
                  <p className="text-sm">📋 Custom disclaimer generation</p>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Book Legal UX Audit
                </Button>
                <p className="text-xs text-gray-500">
                  Subject to attorney-client privilege
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              LegalDrivenDesign™ is a trademark of Compliance Solutions International. 
              All user experiences are legally binding. Side effects may include increased 
              bounce rates, user confusion, and lawyers. Not suitable for actual humans.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-serif font-bold">LegalDrivenDesign</span>
              </div>
              <p className="text-sm text-gray-400">
                Putting legal compliance first, users second, and common sense somewhere around page 47.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Framework</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Consent Architecture</li>
                <li>Disclaimer Methodology</li>
                <li>Liability-Proof Design</li>
                <li>Compliance Metrics</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Legal UX Patterns</li>
                <li>Compliance Templates</li>
                <li>Risk Assessment Tools</li>
                <li>Disclaimer Generator</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Terms of Service (847 pages)</li>
                <li>Privacy Policy (Updated hourly)</li>
                <li>Cookie Preferences (23 categories)</li>
                <li>Disclaimers (¼ disclaimers)</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-xs text-gray-500">
              © 2024 LegalDrivenDesign™. All rights reserved. This website contains 47 tracking pixels, 
              23 different cookie categories, and is legally compliant in 847 jurisdictions. 
              By viewing this footer, you agree to binding arbitration.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
