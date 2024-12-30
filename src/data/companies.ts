export function getUrlFriendlyName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export interface CompanyData {
  id: string;
  urlPath: string;
  name: string;
  logo: string;
  description: string;
  vcScore: {
    score: number;
    minScore: number;
    maxScore: number;
    metrics: {
      efficacy: string;
      efficiency: string;
      effectiveness: string;
    };
  };
  vcGrade: {
    letter: string;
    score: number;
    details: string[];
  };
  vcPrimaryMetrics: {
    geoLocation: number;
    ethnicity: number;
    gender: number;
  };
  vcMetrics: {
    portfolio: number;
    geoLocation: number;
    education: number;
    ethnicity: number;
    gender: number;
  };
  insights: {
    genderDiversity: {
      title: string;
      score: string;
      description: string;
    };
    location: {
      title: string;
      score: string;
      description: string;
    };
    education: {
      title: string;
      score: string;
      description: string;
    };
    ethnicDiversity: {
      title: string;
      score: string;
      description: string;
    };
    investments: {
      title: string;
      score: string;
      description: string;
    };
  };
  finalSummary: {
    title: string;
    content: string;
  };
  isClaimed: boolean;
  isFeatured: boolean;
  featureOrder: number;
}

export const mockCompanyData: Record<string, CompanyData> = {
  nvp: {
    id: "nvp",
    urlPath: "newark-venture-partners",
    name: "Newark Venture Partners",
    logo: "",
    description:
      "Newark Venture Partners is an early-stage venture capital firm focused on B2B software companies in the Newark, New Jersey ecosystem.",
    vcScore: {
      score: 439,
      minScore: 350,
      maxScore: 850,
      metrics: {
        efficacy: "Success in achieving intended outcomes",
        efficiency: "Optimal use of resources to achieve outcomes",
        effectiveness: "The overall impact and quality of outcomes",
      },
    },
    vcGrade: {
      letter: "D",
      score: 439,
      details: [
        "Below-average performance, risk, and integrity",
        "Low representation of key metrics across categories",
        "Inconsistent efficacy, efficiency, and effectiveness metrics",
      ],
    },
    vcPrimaryMetrics: {
      geoLocation: 30,
      ethnicity: 10,
      gender: 10,
    },
    vcMetrics: {
      portfolio: 50,
      geoLocation: 30,
      education: 20,
      ethnicity: 10,
      gender: 10,
    },
    insights: {
      investments: {
        title: "Portfolio",
        score: "37.96 pts",
        description:
          "While Newark Venture Partners demonstrates moderate levels of follow-on investments, there's potential to expand both the frequency of follow-on investments and diversity among invested founders. These steps would significantly enhance this category score",
      },
      location: {
        title: "Geo Location",
        score: "100%",
        description:
          "Newark Venture Partners earns full marks for its geographic positioning, being situated near a major venture capital hub. This location provides substantial access to networks and resources.",
      },
      education: {
        title: "Education",
        score: "116.81 pts",
        description:
          "Newark Venture Partners has a strong educational profile, with a good mix of educational backgrounds across its leadership. However, there remains a slight imbalance in the types of institutions represented, which slightly impacts the score.",
      },
      ethnicDiversity: {
        title: "Ethnicity",
        score: "188.46 pts",
        description:
          "Newark Venture Partners demonstrates decent performance in racial diversity, with an above average leadership representation across racial and ethnic backgrounds. However, there is room for growth to reach the ideal representation mix.",
      },
      genderDiversity: {
        title: "Gender",
        score: "47.18 pts",
        description:
          "Newark Venture Partners has room for improvement in gender diversity, as the leadership is currently all-male. Increasing gender representation, particularly at the leadership level, would strengthen this score.",
      },
    },
    finalSummary: {
      title: "Final Summary:",
      content:
        "Newark Venture Partners shows strength in location and network, along with solid racial diversity.\nThere are opportunities for improvement in gender diversity and investment strategies, particularly with respect to follow-on investments and diverse founder representation.",
    },
    isClaimed: false,
    isFeatured: true,
    featureOrder: 3,
  },
  a16z: {
    id: "a16z",
    urlPath: "andreessen-horowitz",
    name: "Andreessen Horowitz",
    logo: "/logos/andreessen-horowitz.png",
    description:
      "Andreessen Horowitz is an early-stage venture capital firm focused on transformative technology investments across multiple global sectors.",
    vcScore: {
      score: 780,
      minScore: 350,
      maxScore: 850,
      metrics: {
        efficacy: "Success in achieving intended outcomes",
        efficiency: "Optimal use of resources to achieve outcomes",
        effectiveness: "The overall impact and quality of outcomes",
      },
    },
    vcGrade: {
      letter: "A",
      score: 780,
      details: [
        "Industry-leading performance and innovation",
        "Strong representation across diversity metrics",
        "Exceptional portfolio performance and follow-on investment rate",
      ],
    },
    vcPrimaryMetrics: {
      geoLocation: 85,
      ethnicity: 65,
      gender: 60,
    },
    vcMetrics: {
      portfolio: 90,
      geoLocation: 85,
      education: 75,
      ethnicity: 65,
      gender: 60,
    },
    insights: {
      investments: {
        title: "Portfolio",
        score: "89.75 pts",
        description:
          "Exceptional track record of successful investments across various stages and sectors, with strong follow-on investment rates.",
      },
      location: {
        title: "Geo Location",
        score: "100%",
        description:
          "Strategically located in Silicon Valley with global reach and multiple office locations worldwide.",
      },
      education: {
        title: "Education",
        score: "178.90 pts",
        description:
          "Strong educational diversity with representation from various institutions and backgrounds across the investment team.",
      },
      ethnicDiversity: {
        title: "Ethnicity",
        score: "245.32 pts",
        description:
          "Andreessen Horowitz shows strong commitment to ethnic diversity with above-average representation across leadership and portfolio companies.",
      },
      genderDiversity: {
        title: "Gender",
        score: "198.45 pts",
        description:
          "The firm demonstrates good progress in gender diversity, with increasing representation in both investment team and portfolio companies.",
      },
    },
    finalSummary: {
      title: "Final Summary:",
      content:
        "Andreessen Horowitz demonstrates exceptional performance across most metrics, particularly in investment success and network strength. The firm shows strong commitment to diversity and inclusion while maintaining industry-leading positions in key areas.",
    },
    isClaimed: false,
    isFeatured: true,
    featureOrder: 1,
  },
  backstage: {
    id: "backstage",
    urlPath: "backstage-capital",
    name: "Backstage Capital",
    logo: "",
    description:
      "Backstage Capital is an early-stage venture capital firm focused on investing in historically underrepresented founders and innovative entrepreneurs.",
    vcScore: {
      score: 720,
      minScore: 350,
      maxScore: 850,
      metrics: {
        efficacy: "Success in achieving intended outcomes",
        efficiency: "Optimal use of resources to achieve outcomes",
        effectiveness: "The overall impact and quality of outcomes",
      },
    },
    vcGrade: {
      letter: "B",
      score: 720,
      details: [
        "Strong focus on underrepresented founders",
        "High diversity metrics across all categories",
        "Innovative investment approach and strategy",
      ],
    },
    vcPrimaryMetrics: {
      geoLocation: 70,
      ethnicity: 95,
      gender: 90,
    },
    vcMetrics: {
      portfolio: 85,
      geoLocation: 70,
      education: 80,
      ethnicity: 95,
      gender: 90,
    },
    insights: {
      investments: {
        title: "Portfolio",
        score: "82.30 pts",
        description:
          "Strong focus on underrepresented founders with growing portfolio success rates.",
      },
      location: {
        title: "Geo Location",
        score: "85%",
        description:
          "Well-positioned with multiple locations and remote-first approach, enabling broad geographic reach.",
      },
      education: {
        title: "Education",
        score: "168.40 pts",
        description:
          "Diverse educational backgrounds with emphasis on both traditional and non-traditional paths.",
      },
      ethnicDiversity: {
        title: "Ethnicity",
        score: "289.50 pts",
        description:
          "Backstage Capital leads the industry in ethnic diversity, with exceptional representation across all levels.",
      },
      genderDiversity: {
        title: "Gender",
        score: "275.60 pts",
        description:
          "Outstanding gender diversity metrics, with strong female leadership and portfolio representation.",
      },
    },
    finalSummary: {
      title: "Final Summary:",
      content:
        "Backstage Capital excels in diversity metrics and demonstrates strong commitment to underrepresented founders. The firm's innovative approach and growing success rate show promising momentum.",
    },
    isClaimed: false,
    isFeatured: true,
    featureOrder: 4,
  },
  bmf: {
    id: "bmf",
    urlPath: "bmf-fund",
    name: "BMF Fund",
    logo: "",
    description:
      "BMF Fund is an early-stage venture capital firm focused on technology and innovation investments across strategic emerging markets.",
    vcScore: {
      score: 685,
      minScore: 350,
      maxScore: 850,
      metrics: {
        efficacy: "Success in achieving intended outcomes",
        efficiency: "Optimal use of resources to achieve outcomes",
        effectiveness: "The overall impact and quality of outcomes",
      },
    },
    vcGrade: {
      letter: "B",
      score: 685,
      details: [
        "Strong focus on early-stage investments",
        "Above-average diversity metrics",
        "Solid portfolio performance and growth",
      ],
    },
    vcPrimaryMetrics: {
      geoLocation: 80,
      ethnicity: 85,
      gender: 80,
    },
    vcMetrics: {
      portfolio: 75,
      geoLocation: 80,
      education: 70,
      ethnicity: 85,
      gender: 80,
    },
    insights: {
      investments: {
        title: "Portfolio",
        score: "76.40 pts",
        description:
          "Consistent investment strategy with focus on diverse founders and sustainable growth.",
      },
      location: {
        title: "Geo Location",
        score: "90%",
        description:
          "Strategic presence in key markets with strong regional focus and expanding national reach.",
      },
      education: {
        title: "Education",
        score: "156.80 pts",
        description:
          "Diverse educational backgrounds with good balance between traditional and non-traditional paths.",
      },
      ethnicDiversity: {
        title: "Ethnicity",
        score: "256.75 pts",
        description:
          "BMF Fund maintains strong ethnic diversity across investment team and portfolio companies, with consistent improvement in representation.",
      },
      genderDiversity: {
        title: "Gender",
        score: "234.50 pts",
        description:
          "Strong gender diversity metrics with balanced representation in leadership and investment decisions.",
      },
    },
    finalSummary: {
      title: "Final Summary:",
      content:
        "BMF Fund demonstrates strong performance in diversity metrics and regional focus. The firm shows consistent growth in portfolio performance and maintains strong connections within its target markets.",
    },
    isClaimed: false,
    isFeatured: true,
    featureOrder: 5,
  },
  collab: {
    id: "collab",
    urlPath: "collab-capital",
    name: "Collab Capital",
    logo: "",
    description:
      "Collab Capital is an early-stage investment fund focused on supporting Black founders building sustainable, scalable technology companies.",
    vcScore: {
      score: 695,
      minScore: 350,
      maxScore: 850,
      metrics: {
        efficacy: "Success in achieving intended outcomes",
        efficiency: "Optimal use of resources to achieve outcomes",
        effectiveness: "The overall impact and quality of outcomes",
      },
    },
    vcGrade: {
      letter: "B",
      score: 695,
      details: [
        "High impact in underserved markets",
        "Strong community engagement",
        "Innovative investment approaches",
      ],
    },
    vcPrimaryMetrics: {
      geoLocation: 75,
      ethnicity: 90,
      gender: 85,
    },
    vcMetrics: {
      portfolio: 80,
      geoLocation: 75,
      education: 85,
      ethnicity: 90,
      gender: 85,
    },
    insights: {
      investments: {
        title: "Portfolio",
        score: "78.90 pts",
        description:
          "Strong focus on community impact and sustainable growth in portfolio companies.",
      },
      location: {
        title: "Geo Location",
        score: "85%",
        description:
          "Strategic presence in emerging markets with strong community connections.",
      },
      education: {
        title: "Education",
        score: "189.40 pts",
        description:
          "Exceptional educational diversity with emphasis on both traditional and alternative pathways.",
      },
      ethnicDiversity: {
        title: "Ethnicity",
        score: "267.80 pts",
        description:
          "Collab Capital excels in ethnic diversity with strong representation and intentional focus on underrepresented founders.",
      },
      genderDiversity: {
        title: "Gender",
        score: "245.30 pts",
        description:
          "Strong gender diversity metrics with balanced leadership and portfolio representation.",
      },
    },
    finalSummary: {
      title: "Final Summary:",
      content:
        "Collab Capital shows exceptional strength in community engagement and diversity metrics. The firm's innovative approach to investment and strong focus on underserved markets creates significant impact.",
    },
    isClaimed: false,
    isFeatured: true,
    featureOrder: 6,
  },
  collide: {
    id: "collide",
    urlPath: "collide-capital",
    name: "Collide Capital",
    logo: "",
    description:
      "Collide Capital is an early-stage venture firm focused on investing in diverse founders building revolutionary technology solutions.",
    vcScore: {
      score: 705,
      minScore: 350,
      maxScore: 850,
      metrics: {
        efficacy: "Success in achieving intended outcomes",
        efficiency: "Optimal use of resources to achieve outcomes",
        effectiveness: "The overall impact and quality of outcomes",
      },
    },
    vcGrade: {
      letter: "B",
      score: 705,
      details: [
        "Strong early-stage investment track record",
        "High diversity and inclusion metrics",
        "Innovative deal sourcing approach",
      ],
    },
    vcPrimaryMetrics: {
      geoLocation: 80,
      ethnicity: 88,
      gender: 82,
    },
    vcMetrics: {
      portfolio: 85,
      geoLocation: 80,
      education: 75,
      ethnicity: 88,
      gender: 82,
    },
    insights: {
      investments: {
        title: "Portfolio",
        score: "86.30 pts",
        description:
          "Strong track record in early-stage investments with focus on diverse founding teams.",
      },
      location: {
        title: "Geo Location",
        score: "95%",
        description:
          "Well-positioned across multiple markets with strong presence in key startup ecosystems.",
      },
      education: {
        title: "Education",
        score: "172.60 pts",
        description:
          "Diverse educational backgrounds with emphasis on varied experiences and expertise.",
      },
      ethnicDiversity: {
        title: "Ethnicity",
        score: "262.40 pts",
        description:
          "Collide Capital maintains high standards in ethnic diversity across all levels of operation and investment decisions.",
      },
      genderDiversity: {
        title: "Gender",
        score: "238.90 pts",
        description:
          "Strong commitment to gender diversity with balanced representation in leadership and investments.",
      },
    },
    finalSummary: {
      title: "Final Summary:",
      content:
        "Collide Capital demonstrates strong performance in early-stage investments and diversity metrics. The firm's innovative approach and strong network create significant value for portfolio companies.",
    },
    isClaimed: false,
    isFeatured: true,
    featureOrder: 7,
  },
  equity: {
    id: "equity",
    urlPath: "equity-alliance",
    name: "Equity Alliance",
    logo: "",
    description:
      "Equity Alliance is an early-stage venture capital firm focused on investing in underrepresented founders creating transformative solutions.",
    vcScore: {
      score: 715,
      minScore: 350,
      maxScore: 850,
      metrics: {
        efficacy: "Success in achieving intended outcomes",
        efficiency: "Optimal use of resources to achieve outcomes",
        effectiveness: "The overall impact and quality of outcomes",
      },
    },
    vcGrade: {
      letter: "B",
      score: 715,
      details: [
        "Strong focus on equitable investing",
        "High impact in underserved markets",
        "Innovative community engagement",
      ],
    },
    vcPrimaryMetrics: {
      geoLocation: 78,
      ethnicity: 92,
      gender: 88,
    },
    vcMetrics: {
      portfolio: 82,
      geoLocation: 78,
      education: 85,
      ethnicity: 92,
      gender: 88,
    },
    insights: {
      investments: {
        title: "Portfolio",
        score: "82.70 pts",
        description:
          "Focused investment strategy prioritizing equitable access and sustainable growth.",
      },
      location: {
        title: "Geo Location",
        score: "88%",
        description:
          "Strategic presence in diverse markets with focus on underserved communities.",
      },
      education: {
        title: "Education",
        score: "184.50 pts",
        description:
          "Strong educational diversity with emphasis on varied backgrounds and experiences.",
      },
      ethnicDiversity: {
        title: "Ethnicity",
        score: "278.60 pts",
        description:
          "Equity Alliance leads in ethnic diversity with exceptional representation and intentional focus on inclusive investing.",
      },
      genderDiversity: {
        title: "Gender",
        score: "256.40 pts",
        description:
          "Strong gender diversity metrics with balanced representation across all levels.",
      },
    },
    finalSummary: {
      title: "Final Summary:",
      content:
        "Equity Alliance demonstrates exceptional commitment to inclusive investing and community impact. The firm's strong focus on diversity and equitable access creates sustainable value across its portfolio.",
    },
    isClaimed: false,
    isFeatured: true,
    featureOrder: 8,
  },
  firstround: {
    id: "firstround",
    urlPath: "first-round-capital",
    name: "First Round Capital",
    logo: "",
    description:
      "First Round Capital is a seed-stage venture firm focused on building foundational partnerships with ambitious technology pioneers.",
    vcScore: {
      score: 755,
      minScore: 350,
      maxScore: 850,
      metrics: {
        efficacy: "Success in achieving intended outcomes",
        efficiency: "Optimal use of resources to achieve outcomes",
        effectiveness: "The overall impact and quality of outcomes",
      },
    },
    vcGrade: {
      letter: "A",
      score: 755,
      details: [
        "Industry-leading early-stage investment track record",
        "Strong founder support and resources",
        "Innovative platform approach",
      ],
    },
    vcPrimaryMetrics: {
      geoLocation: 85,
      ethnicity: 75,
      gender: 78,
    },
    vcMetrics: {
      portfolio: 88,
      geoLocation: 85,
      education: 80,
      ethnicity: 75,
      gender: 78,
    },
    insights: {
      investments: {
        title: "Portfolio",
        score: "92.40 pts",
        description:
          "Exceptional track record in early-stage investments with strong follow-on rates.",
      },
      location: {
        title: "Geo Location",
        score: "98%",
        description:
          "Strategic presence in major tech hubs with strong national reach.",
      },
      education: {
        title: "Education",
        score: "186.70 pts",
        description:
          "Strong educational diversity with emphasis on both traditional and non-traditional backgrounds.",
      },
      ethnicDiversity: {
        title: "Ethnicity",
        score: "234.50 pts",
        description:
          "First Round Capital shows improving ethnic diversity metrics with ongoing commitment to inclusive investing.",
      },
      genderDiversity: {
        title: "Gender",
        score: "228.90 pts",
        description:
          "Strong progress in gender diversity with increasing representation across investment team and portfolio.",
      },
    },
    finalSummary: {
      title: "Final Summary:",
      content:
        "First Round Capital demonstrates exceptional strength in early-stage investing and founder support. While showing improvement in diversity metrics, the firm's platform approach and network create significant value for portfolio companies.",
    },
    isClaimed: false,
    isFeatured: true,
    featureOrder: 9,
  },
  precursor: {
    id: "precursor",
    urlPath: "precursor-ventures",
    name: "Precursor Ventures",
    logo: "",
    description:
      "Precursor Ventures is a pre-seed venture capital firm focused on providing strategic institutional capital to diverse founding teams.",
    vcScore: {
      score: 725,
      minScore: 350,
      maxScore: 850,
      metrics: {
        efficacy: "Success in achieving intended outcomes",
        efficiency: "Optimal use of resources to achieve outcomes",
        effectiveness: "The overall impact and quality of outcomes",
      },
    },
    vcGrade: {
      letter: "B",
      score: 725,
      details: [
        "Strong pre-seed investment focus",
        "High founder diversity commitment",
        "Innovative early-stage support model",
      ],
    },
    vcPrimaryMetrics: {
      geoLocation: 82,
      ethnicity: 86,
      gender: 85,
    },
    vcMetrics: {
      portfolio: 84,
      geoLocation: 82,
      education: 78,
      ethnicity: 86,
      gender: 85,
    },
    insights: {
      investments: {
        title: "Portfolio",
        score: "84.30 pts",
        description:
          "Strong track record in pre-seed investments with focus on diverse founding teams.",
      },
      location: {
        title: "Geo Location",
        score: "92%",
        description:
          "Well-positioned in key startup ecosystems with strong national presence and remote-first approach.",
      },
      education: {
        title: "Education",
        score: "176.80 pts",
        description:
          "Diverse educational backgrounds with emphasis on both traditional and alternative pathways.",
      },
      ethnicDiversity: {
        title: "Ethnicity",
        score: "258.40 pts",
        description:
          "Precursor Ventures maintains strong commitment to ethnic diversity in both team composition and portfolio investments.",
      },
      genderDiversity: {
        title: "Gender",
        score: "242.60 pts",
        description:
          "Strong gender diversity metrics with balanced representation and intentional focus on female founders.",
      },
    },
    finalSummary: {
      title: "Final Summary:",
      content:
        "Precursor Ventures shows exceptional strength in early-stage investing with strong commitment to founder diversity. The firm's pre-seed focus and support model create significant value for portfolio companies.",
    },
    isClaimed: false,
    isFeatured: true,
    featureOrder: 10,
  },
  rightside: {
    id: "rightside",
    urlPath: "right-side-capital-management",
    name: "Right Side Capital Management",
    logo: "",
    description:
      "Right Side Capital Management is an early-stage venture firm focused on systematic, data-driven investments in promising technologies.",
    vcScore: {
      score: 698,
      minScore: 350,
      maxScore: 850,
      metrics: {
        efficacy: "Success in achieving intended outcomes",
        efficiency: "Optimal use of resources to achieve outcomes",
        effectiveness: "The overall impact and quality of outcomes",
      },
    },
    vcGrade: {
      letter: "B",
      score: 698,
      details: [
        "Data-driven investment approach",
        "Strong early-stage portfolio performance",
        "Systematic investment strategy",
      ],
    },
    vcPrimaryMetrics: {
      geoLocation: 80,
      ethnicity: 72,
      gender: 70,
    },
    vcMetrics: {
      portfolio: 86,
      geoLocation: 80,
      education: 75,
      ethnicity: 72,
      gender: 70,
    },
    insights: {
      investments: {
        title: "Portfolio",
        score: "88.60 pts",
        description:
          "Strong systematic approach to early-stage investments with consistent performance metrics.",
      },
      location: {
        title: "Geo Location",
        score: "88%",
        description:
          "Strategic presence in major tech markets with expanding geographic reach.",
      },
      education: {
        title: "Education",
        score: "168.90 pts",
        description:
          "Strong educational diversity with emphasis on quantitative and technical backgrounds.",
      },
      ethnicDiversity: {
        title: "Ethnicity",
        score: "224.50 pts",
        description:
          "Right Side Capital shows growing commitment to ethnic diversity with ongoing improvements in representation.",
      },
      genderDiversity: {
        title: "Gender",
        score: "218.70 pts",
        description:
          "Steady progress in gender diversity metrics with increasing focus on balanced representation.",
      },
    },
    finalSummary: {
      title: "Final Summary:",
      content:
        "Right Side Capital demonstrates strong performance through its systematic, data-driven approach. While showing improvement in diversity metrics, the firm's technical expertise and consistent methodology drive portfolio success.",
    },
    isClaimed: false,
    isFeatured: true,
    featureOrder: 11,
  },
  slauson: {
    id: "slauson",
    urlPath: "slauson-co",
    name: "Slauson & Co.",
    logo: "",
    description:
      "Slauson & Co. is an early-stage venture capital firm focused on driving economic empowerment through innovative entrepreneurship solutions.",
    vcScore: {
      score: 735,
      minScore: 350,
      maxScore: 850,
      metrics: {
        efficacy: "Success in achieving intended outcomes",
        efficiency: "Optimal use of resources to achieve outcomes",
        effectiveness: "The overall impact and quality of outcomes",
      },
    },
    vcGrade: {
      letter: "B",
      score: 735,
      details: [
        "Strong focus on underserved communities",
        "High impact investment approach",
        "Innovative community engagement model",
      ],
    },
    vcPrimaryMetrics: {
      geoLocation: 88,
      ethnicity: 94,
      gender: 88,
    },
    vcMetrics: {
      portfolio: 82,
      geoLocation: 88,
      education: 86,
      ethnicity: 94,
      gender: 88,
    },
    insights: {
      investments: {
        title: "Portfolio",
        score: "86.70 pts",
        description:
          "Strong focus on community impact and sustainable growth in portfolio companies.",
      },
      location: {
        title: "Geo Location",
        score: "94%",
        description:
          "Strategic presence in underserved markets with strong community connections.",
      },
      education: {
        title: "Education",
        score: "192.40 pts",
        description:
          "Exceptional educational diversity with strong emphasis on varied pathways and experiences.",
      },
      ethnicDiversity: {
        title: "Ethnicity",
        score: "282.60 pts",
        description:
          "Slauson & Co. leads in ethnic diversity with exceptional representation and focused commitment to underrepresented founders.",
      },
      genderDiversity: {
        title: "Gender",
        score: "264.30 pts",
        description:
          "Strong gender diversity metrics with balanced representation across all levels of operation.",
      },
    },
    finalSummary: {
      title: "Final Summary:",
      content:
        "Slauson & Co. demonstrates exceptional commitment to community impact and founder diversity. The firm's innovative approach and strong community connections create sustainable value across its portfolio.",
    },
    isClaimed: false,
    isFeatured: true,
    featureOrder: 12,
  },
  usv: {
    id: "usv",
    urlPath: "union-square-ventures",
    name: "Union Square Ventures",
    logo: "/logos/union-square.png",
    description:
      "Union Square Ventures is a thesis-driven venture capital firm focused on investing in revolutionary, disruptive networks and platforms.",
    vcScore: {
      score: 765,
      minScore: 350,
      maxScore: 850,
      metrics: {
        efficacy: "Success in achieving intended outcomes",
        efficiency: "Optimal use of resources to achieve outcomes",
        effectiveness: "The overall impact and quality of outcomes",
      },
    },
    vcGrade: {
      letter: "A",
      score: 765,
      details: [
        "Industry-leading investment track record",
        "Strong thesis-driven approach",
        "Exceptional portfolio performance",
      ],
    },
    vcPrimaryMetrics: {
      geoLocation: 88,
      ethnicity: 76,
      gender: 78,
    },
    vcMetrics: {
      portfolio: 92,
      geoLocation: 88,
      education: 82,
      ethnicity: 76,
      gender: 78,
    },
    insights: {
      investments: {
        title: "Portfolio",
        score: "94.60 pts",
        description:
          "Exceptional investment track record with strong thesis-driven approach and consistent returns.",
      },
      location: {
        title: "Geo Location",
        score: "96%",
        description:
          "Strategic presence in major tech hubs with strong global reach and network.",
      },
      education: {
        title: "Education",
        score: "188.90 pts",
        description:
          "Strong educational diversity with emphasis on both traditional and non-traditional backgrounds.",
      },
      ethnicDiversity: {
        title: "Ethnicity",
        score: "236.80 pts",
        description:
          "Union Square Ventures shows improving ethnic diversity metrics with ongoing commitment to inclusive investing.",
      },
      genderDiversity: {
        title: "Gender",
        score: "232.40 pts",
        description:
          "Strong progress in gender diversity with increasing representation across investment team and portfolio.",
      },
    },
    finalSummary: {
      title: "Final Summary:",
      content:
        "Union Square Ventures demonstrates exceptional strength in investment performance and thesis-driven approach. While continuing to improve diversity metrics, the firm's strong network and consistent track record create significant value for portfolio companies.",
    },
    isClaimed: false,
    isFeatured: true,
    featureOrder: 2,
  },
};

export function getCompanyByUrlPath(urlPath: string): CompanyData | undefined {
  return Object.values(mockCompanyData).find(
    (company) => company.urlPath === urlPath
  );
}
