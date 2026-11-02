export interface LegalDoc { title: string; date: string; body: { tag: string; html: string }[] }

export const legal: Record<string, LegalDoc> = {
  "privacy-policy": {
    "title": "Privacy Policy",
    "date": "September 27, 2023",
    "body": [
      {
        "tag": "h3",
        "html": "Introduction"
      },
      {
        "tag": "p",
        "html": "Welcome to Codify (\"we,\" \"our,\" or \"us\"). At Neutra, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and protect your personal data when you use our website, products, or services. By accessing or using our services, you consent to the practices described in this Privacy Policy."
      },
      {
        "tag": "p",
        "html": "<br>"
      },
      {
        "tag": "h3",
        "html": "Information We Collect"
      },
      {
        "tag": "p",
        "html": "We may collect various types of information, including:"
      },
      {
        "tag": "ul",
        "html": "<li data-preset-tag=\"p\"><p><strong>Personal Information:</strong> Such as your name, email address, and other identifying information you provide when registering or contacting us.</p></li><li data-preset-tag=\"p\"><p><strong>Usage Data:</strong> Information about how you interact with our website, products, and services, including IP addresses, device and browser information, and access times.</p></li><li data-preset-tag=\"p\"><p><strong>Cookies:</strong> We use cookies to collect information about your preferences, settings, and browsing patterns. You can manage cookie preferences in your browser settings.</p></li><li data-preset-tag=\"p\"><p><strong>Third-party Information:</strong> Information we may receive from third-party sources or services, which may include social media platforms.</p></li>"
      },
      {
        "tag": "p",
        "html": "<br>"
      },
      {
        "tag": "h3",
        "html": "How We Use Your Information"
      },
      {
        "tag": "p",
        "html": "We use your information for various purposes, including:"
      },
      {
        "tag": "ul",
        "html": "<li data-preset-tag=\"p\"><p>Providing and improving our products and services.</p></li><li data-preset-tag=\"p\"><p>Responding to your inquiries and support requests.</p></li><li data-preset-tag=\"p\"><p>Sending you promotional materials and updates (if you opt-in).</p></li><li data-preset-tag=\"p\"><p>Complying with legal obligations and protecting our rights.</p></li>"
      },
      {
        "tag": "p",
        "html": "<br>"
      },
      {
        "tag": "h3",
        "html": "Data Security"
      },
      {
        "tag": "p",
        "html": "We take the security of your personal information seriously and employ appropriate technical and organizational measures to safeguard it. However, no method of online transmission or storage is 100% secure, and we cannot guarantee absolute security."
      },
      {
        "tag": "p",
        "html": "<br>"
      },
      {
        "tag": "h3",
        "html": "Third-party Links"
      },
      {
        "tag": "p",
        "html": "Our website may contain links to third-party sites or services not operated by us. We are not responsible for the privacy practices of such third parties. We encourage you to review their privacy policies."
      },
      {
        "tag": "p",
        "html": "<br>"
      },
      {
        "tag": "h3",
        "html": "Your Choices"
      },
      {
        "tag": "p",
        "html": "You can update or delete your personal information by contacting us. You can also opt-out of receiving promotional communications from us."
      },
      {
        "tag": "p",
        "html": "<br>"
      },
      {
        "tag": "h3",
        "html": "Changes to This Policy"
      },
      {
        "tag": "p",
        "html": "We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated Privacy Policy on our website."
      }
    ]
  },
  "licensing": {
    "title": "Licensing",
    "date": "September 27, 2023",
    "body": [
      {
        "tag": "h2",
        "html": "Software Licensing Agreement"
      },
      {
        "tag": "p",
        "html": "This Software Licensing Agreement (\"Agreement\") is entered into between [Your Company Name], hereinafter referred to as the \"Licensor,\" and the individual or entity that accepts the terms of this Agreement, hereinafter referred to as the \"Licensee.\""
      },
      {
        "tag": "p",
        "html": "<br>"
      },
      {
        "tag": "h3",
        "html": "License Grant"
      },
      {
        "tag": "p",
        "html": "Subject to the terms and conditions of this Agreement, Licensor grants Licensee a non-exclusive, non-transferable, and revocable license to use the software (\"Software\") provided by Licensor. This license allows Licensee to install and use the Software on a single computer or device."
      },
      {
        "tag": "p",
        "html": "<br>"
      },
      {
        "tag": "h3",
        "html": "License Restrictions"
      },
      {
        "tag": "ol",
        "html": "<li data-preset-tag=\"p\"><p>Licensee may not sublicense, sell, assign, or otherwise transfer the Software to any third party.</p></li><li data-preset-tag=\"p\"><p>Licensee may not modify, reverse engineer, decompile, or disassemble the Software.</p></li><li data-preset-tag=\"p\"><p>Licensee may not distribute, share, or make the Software available over a network, either in part or in its entirety.</p></li>"
      },
      {
        "tag": "p",
        "html": "<br>"
      },
      {
        "tag": "h3",
        "html": "Intellectual Property"
      },
      {
        "tag": "p",
        "html": "The Software is the intellectual property of Licensor and is protected by copyright and other intellectual property laws. Licensee acknowledges that this Agreement does not grant Licensee any ownership or rights to the Software."
      },
      {
        "tag": "p",
        "html": "<br>"
      },
      {
        "tag": "h3",
        "html": "Termination"
      },
      {
        "tag": "p",
        "html": "Licensor reserves the right to terminate this Agreement at any time if Licensee fails to comply with its terms. Upon termination, Licensee must cease using the Software and destroy all copies."
      },
      {
        "tag": "p",
        "html": "<br>"
      },
      {
        "tag": "h3",
        "html": "Warranty Disclaimer"
      },
      {
        "tag": "p",
        "html": "The Software is provided \"as is\" and without warranties. Licensor disclaims any and all warranties, including but not limited to, the implied warranties of merchantability and fitness for a particular purpose."
      },
      {
        "tag": "p",
        "html": "<br>"
      },
      {
        "tag": "h3",
        "html": "Limitation of Liability"
      },
      {
        "tag": "p",
        "html": "Licensor shall not be liable for any damages, including but not limited to, direct, indirect, special, or consequential damages arising out of the use or inability to use the Software."
      },
      {
        "tag": "p",
        "html": "<br>"
      },
      {
        "tag": "h3",
        "html": "Entire Agreement"
      },
      {
        "tag": "p",
        "html": "This Agreement constitutes the entire understanding between the parties and supersedes all previous agreements, understandings, and representations."
      },
      {
        "tag": "p",
        "html": "<br>"
      },
      {
        "tag": "p",
        "html": "By accepting the terms of this Agreement, Licensee acknowledges that they have read, understood, and agree to be bound by its terms."
      }
    ]
  },
  "terms-of-use": {
    "title": "Terms of Use",
    "date": "September 27, 2023",
    "body": [
      {
        "tag": "p",
        "html": "Please read these Terms of Use (\"Agreement\") carefully before using Neutra (\"us,\" \"we,\" or \"our\"). This Agreement sets forth the legally binding terms and conditions for your use of the Neutra website and any of its related services."
      },
      {
        "tag": "p",
        "html": "By accessing or using Neutra in any manner, including, but not limited to, visiting or browsing Neutra or contributing content or other materials to Neutra, you agree to be bound by this Agreement."
      },
      {
        "tag": "p",
        "html": "<br>"
      },
      {
        "tag": "h3",
        "html": "Intellectual Property"
      },
      {
        "tag": "p",
        "html": "Neutra and its original content, features, and functionality are owned by Neutra and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws."
      },
      {
        "tag": "p",
        "html": "<br>"
      },
      {
        "tag": "h3",
        "html": "Termination"
      },
      {
        "tag": "p",
        "html": "We may terminate your access to Neutra, without cause or notice, which may result in the forfeiture and destruction of all information associated with your account. All provisions of this Agreement that by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability."
      },
      {
        "tag": "p",
        "html": "<br>"
      },
      {
        "tag": "h3",
        "html": "Links to Other Websites"
      },
      {
        "tag": "p",
        "html": "Our website may contain links to third-party websites. These links are provided solely as a convenience to you. By linking to these websites, we do not create or have an affiliation with, or sponsor such third-party websites. The inclusion of links within our website does not constitute any endorsement, guarantee, warranty, or recommendation of such third-party websites. Codify has no control over the legal documents and privacy practices of third-party websites. As such, you access any such third-party websites at your own risk."
      },
      {
        "tag": "p",
        "html": "<br>"
      },
      {
        "tag": "h3",
        "html": "Changes to This Agreement"
      },
      {
        "tag": "p",
        "html": "We reserve the right to modify this Agreement at any time. You should check this Agreement periodically for changes. By using Neutra after we post any changes to this Agreement, you agree to accept those changes, whether or not you have reviewed them."
      },
      {
        "tag": "p",
        "html": "<br>"
      },
      {
        "tag": "h3",
        "html": "Contact Us"
      },
      {
        "tag": "p",
        "html": "If you have any questions about this Agreement, please contact us at hello@neutra.com."
      }
    ]
  }
};
