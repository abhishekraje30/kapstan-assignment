import { NextResponse } from "next/server";

export async function POST(request: Request) {
  return NextResponse.json(
    {
      debugContent:
        '<html>\n<p>Original Headline: Scan or Scam? Uncovering the Dangers of QR Codes<br>\n1. "Understanding the Risks: QR Codes and Cybercrime"\n2. "QR Codes: A Convenient Tool or a Cybercriminal\'s Weapon?"\n3. "The Hidden Dangers of QR Codes: A Cybersecurity Perspective"\n4. "QR Codes: A Gateway for Cybercriminals"\n5. "Beware of QR Codes: A New Avenue for Fraud"\n6. "QR Codes: A Double-Edged Sword in Today\'s Digital Age"\n7. "The Dark Side of QR Codes: A Potential Threat to Your Security"\n8. "QR Codes: A Convenient Tool with Potential Risks"\n9. "QR Codes: A Cybercriminal\'s New Playground"\n10. "Stay Alert: QR Codes Can Be a Cybersecurity Threat"<br>\n4.466396939662262\tUnderstanding the Risks: QR Codes and Cybercrime<br>\n-0.7374023524996272\tQR Codes: A Convenient Tool or a Cybercriminal\'s Weapon?<br>\n-3.206091433703641\tThe Hidden Dangers of QR Codes: A Cybersecurity Perspective<br>\n2.590415152001537\tQR Codes: A Gateway for Cybercriminals<br>\n3.562936357738648\tBeware of QR Codes: A New Avenue for Fraud<br>\n-5.311278584767766\tQR Codes: A Double-Edged Sword in Today\'s Digital Age<br>\n-2.0512055203740633\tThe Dark Side of QR Codes: A Potential Threat to Your Security<br>\n-7.171068471389823\tQR Codes: A Convenient Tool with Potential Risks<br>\n3.883882408272317\tQR Codes: A Cybercriminal\'s New Playground<br>\n0.22981469259098652\tStay Alert: QR Codes Can Be a Cybersecurity Threat<br>\n1.5\tUnderstanding the Risks: QR Codes and Cybercrime<br>\n1.4\tQR Codes: A Convenient Tool or a Cybercriminal\'s Weapon?<br>\n1.3\tThe Hidden Dangers of QR Codes: A Cybersecurity Perspective<br>\n1.2\tQR Codes: A Gateway for Cybercriminals<br>\n1.1\tBeware of QR Codes: A New Avenue for Fraud<br>\n1.0\tQR Codes: A Double-Edged Sword in Today\'s Digital Age<br>\n0.9\tThe Dark Side of QR Codes: A Potential Threat to Your Security<br>\n0.8\tQR Codes: A Convenient Tool with Potential Risks<br>\n0.7\tQR Codes: A Cybercriminal\'s New Playground<br>\n0.6\tStay Alert: QR Codes Can Be a Cybersecurity Threat<br>\n[(1.0, 0), (0.7208648629653086, 1), (0.5592428662214723, 2), (0.7527323724970025, 3), (0.7389608812280533, 4), (0.3021275031803859, 5), (0.38663994994506135, 6), (0.11111111111111115, 7), (0.5305280039876372, 8), (0.31797659123232286, 9)]<br>\nHEADLINES DONE in 17.46 secs..\n\n</p>\n</html>',
      headlines: [
        "Understanding the Risks: QR Codes and Cybercrime",
        "QR Codes: A Gateway for Cybercriminals",
        "Beware of QR Codes: A New Avenue for Fraud",
        "QR Codes: A Convenient Tool or a Cybercriminal's Weapon?",
        "The Hidden Dangers of QR Codes: A Cybersecurity Perspective",
      ],
    },
    { status: 200 }
  );
}
