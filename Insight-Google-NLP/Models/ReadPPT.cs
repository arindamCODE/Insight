using System;
using System.Collections.Generic;
using DocumentFormat.OpenXml.Presentation;
using A = DocumentFormat.OpenXml.Drawing;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml;
using System.Text;
using System.Linq;
using System.IO;

namespace readfile
{
    public class ReadPPT
    {
        public  string Readppt(string DocName)
        {
             string dest=System.IO.Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Desktop),DocName);
            string slideText;
            string finaldoc="";
            
            int final_index=RetrieveNumberOfSlides(dest,true);
            try
            { for(int index=0;index<final_index;index++)
                {
                GetSlideIdAndText(out slideText, dest, index);
                finaldoc=finaldoc+slideText;
                Console.WriteLine("The text in the slide #{0} is: {1}", index, slideText);
                }
            }
            catch (ArgumentOutOfRangeException exp)
            {
                Console.WriteLine(exp.Message);
            }
            File.Delete(dest);
            return finaldoc;
        }
            public static void GetSlideIdAndText(out string sldText, string docName, int index)
            {
                 using (PresentationDocument ppt = PresentationDocument.Open(docName, false))
             {
                // Get the relationship ID of the first slide.
                PresentationPart part = ppt.PresentationPart;
                OpenXmlElementList slideIds = part.Presentation.SlideIdList.ChildElements;
                string relId = (slideIds[index] as SlideId).RelationshipId;
                relId = (slideIds[index] as SlideId).RelationshipId;

                // Get the slide part from the relationship ID.
                SlidePart slide = (SlidePart)part.GetPartById(relId);

                // Build a StringBuilder object.
                StringBuilder paragraphText = new StringBuilder();

                // Get the inner text of the slide:
                IEnumerable<A.Text> texts = slide.Slide.Descendants<A.Text>();
                foreach (A.Text text in texts)
                {
                    paragraphText.Append(text.Text);
                }
                sldText = paragraphText.ToString();
            }
         }
     public static int RetrieveNumberOfSlides(string file, bool includeHidden = true)
    {
      int slidesCount = 0;

     using (PresentationDocument doc = PresentationDocument.Open(file, false))
    {
        // Get the presentation part of the document.
        PresentationPart presentationPart = doc.PresentationPart;
        if (presentationPart != null)
        {
            if (includeHidden)
            {
                slidesCount = presentationPart.SlideParts.Count();
            }
            else
            {
                // Each slide can include a Show property, which if hidden 
                // will contain the value "0". The Show property may not 
                // exist, and most likely will not, for non-hidden slides.
                var slides = presentationPart.SlideParts.Where(
                    (s) => (s.Slide != null) &&
                      ((s.Slide.Show == null) || (s.Slide.Show.HasValue && 
                      s.Slide.Show.Value)));
                slidesCount = slides.Count();
            }
        }
    }
    return slidesCount;
}
        }
        
    }

