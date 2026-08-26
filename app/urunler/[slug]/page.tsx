import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQItem from "@/components/FAQItem";
import JsonLd from "@/components/JsonLd";
import { blogPosts, businessInfo, services, whatsappHref } from "@/data/site";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generatePageMetadata,
  generateServiceSchema,
} from "@/lib/seo";
import type { FAQ, SEOFields } from "@/types";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ServiceDetailSection = {
  title: string;
  paragraphs: string[];
};

type ServiceDetailContent = {
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  highlights: string[];
  process: string[];
  sections: ServiceDetailSection[];
  beforeCare: string[];
  afterCare: string[];
  faqs: FAQ[];
  relatedBlogSlugs: string[];
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

const serviceDetails: Record<string, ServiceDetailContent> = {
  "tekerlekli-sandalye": {
    eyebrow: "Ordu Tekerlekli Sandalye",
    metaTitle: "Ordu Tekerlekli Sandalye Modelleri",
    metaDescription: "Ordu Altınordu'da manuel, katlanabilir ve akülü tekerlekli sandalye modelleri. Ürün, stok ve teslimat bilgisi için Yaşam Medikal'e ulaşın.",
    keywords: ["Ordu tekerlekli sandalye", "Altınordu medikal", "akülü tekerlekli sandalye Ordu", "hasta taşıma", "katlanabilir tekerlekli sandalye"],
    intro: "Ordu Yaşam Medikal olarak, hareket kısıtlılığı yaşayan kullanıcıların günlük yaşamını kolaylaştıran manuel ve akülü tekerlekli sandalye modelleri sunuyoruz. Kullanıcının ölçülerine, hareket kabiliyetine ve kullanım alanına uygun ürün seçimi için bilgi veriyor; stok ve teslimat koşullarını sipariş öncesinde netleştiriyoruz.",
    highlights: [
      "Hafif ve katlanabilir alüminyum gövde",
      "Akülü ve manuel model seçenekleri",
      "Ordu içi teslimat seçenekleri",
      "Ürün özellikleri ve kullanım desteği",
    ],
    process: [
      "Kullanıcının kilo, boy ve hareket kabiliyetine göre en uygun model tespiti yapılır.",
      "Ev içi, dış mekân veya karma kullanım ihtiyacı değerlendirilir.",
      "Seçilen ürün adresinize getirilerek, katlama ve fren mekanizmaları uygulamalı anlatılır.",
      "Teslimat koşulları ile kullanım ve bakım bilgileri sipariş öncesinde paylaşılır.",
    ],
    sections: [
      {
        title: "Tekerlekli sandalye seçiminde dikkat edilecekler",
        paragraphs: [
          "Hasta taburcu süreçlerinde veya kalıcı hareket kayıplarında doğru tekerlekli sandalye seçimi, hastanın psikolojik ve fiziksel sağlığı için kritik bir adımdır.",
          "Ordu Yaşam Medikal'den temin edeceğiniz ürünler; emniyet kemerli, anti-bakteriyel oturma minderli, refakatçi frenli ve devrilme önleyici tekerleklere sahip tam donanımlı modellerden oluşur."
        ],
      },
      {
        title: "Akülü mü, Manuel mi Tercih Edilmeli?",
        paragraphs: [
          "Kullanıcının kol kuvveti yerindeyse veya kendisine eşlik eden sürekli bir refakatçisi varsa manuel modeller daha ekonomik, taşınabilir ve hafif bir çözümdür.",
          "Ancak hastanın kendi başına dışarı çıkma, eğimli yollarda ilerleme ve özgürce hareket etme ihtiyacı varsa, joystick kontrollü akülü tekerlekli sandalyelerimiz bağımsızlık hissini ve yaşam kalitesini doğrudan artırır."
        ],
      },
    ],
    beforeCare: [
      "Hastanın günlük zamanının ne kadarını sandalyede geçireceğini (sürekli/geçici) belirleyin.",
      "Ev içi kullanım olacaksa kapı eşiklerinin, banyo girişlerinin ve koridor genişliklerinin uygunluğunu kontrol edin.",
      "Araç bagajında taşınacaksa, sandalyenin katlandığında kapladığı alanı ve ağırlığını göz önünde bulundurun.",
    ],
    afterCare: [
      "Periyodik olarak tekerlek rulmanlarını, ön sarhoş tekerlekleri ve fren mekanizmasını kontrol edin.",
      "Oturma minderi ve sırt dayama kumaşını düzenli olarak nemli bir bezle temizleyerek hijyeni sağlayın.",
      "Akülü modellerde batarya ömrünü maksimuma çıkarmak için cihazı tam boşalmadan şarj edin.",
    ],
    faqs: [
      {
        id: "tekerlekli-sandalye-secimi",
        question: "Hangi tekerlekli sandalye modelini seçmeliyim?",
        answer: "Kullanıcının kilosu, oturma genişliği, hareket kabiliyeti, kullanım alanı ve taşıma ihtiyacı birlikte değerlendirilmelidir. Uygun model için ölçülerinizi ve kullanım beklentinizi bizimle paylaşabilirsiniz."
      },
      {
        id: "tekerlekli-sandalye-agirlik",
        question: "Tekerlekli sandalyelerin taşıma kapasitesi ne kadardır?",
        answer: "Standart manuel modellerimiz 100-120 kg arası taşıma kapasitesine sahip olup, obezite hastaları için güçlendirilmiş 150 kg üzeri şasili özel modellerimiz de mevcuttur."
      }
    ],
    relatedBlogSlugs: ["medikal-cihaz-satin-alma-rehberi"]
  },
  "hasta-yatagi": {
    eyebrow: "Ordu Hasta Yatağı",
    metaTitle: "Ordu Hasta Yatağı Satış ve Kurulum",
    metaDescription: "Ordu'da 2, 3 ve 4 motorlu hasta yatağı modelleri. Altınordu'da ürün, stok, teslimat ve kurulum bilgisi için Yaşam Medikal'e ulaşın.",
    keywords: ["Ordu hasta yatağı", "motorlu hasta yatağı", "Altınordu hasta yatağı", "ev tipi hasta yatağı", "medikal yatak", "hasta yatağı fiyatları"],
    intro: "Evde bakım sürecinin en kritik ve vazgeçilmez ekipmanı olan hasta yatakları, hem uzun süre yatan hastanın konforunu hem de hasta yakınının fiziksel bakım yükünü ciddi oranda hafifletir. Ordu Yaşam Medikal güvencesiyle sunduğumuz, el kumandasıyla kolayca yönetilebilen 2, 3 ve 4 motorlu hasta yatağı modellerimiz, hastane standartlarındaki tedavi ve yatış kalitesini doğrudan evinizin konforuna taşır.",
    highlights: [
      "2, 3 ve 4 motorlu, asansör özellikli model seçenekleri",
      "Tamamen kumanda ile yönetilebilen baş ve ayak kısımları",
      "Ordu Altınordu için teslimat ve kurulum seçenekleri",
      "Güvenlik için amortisörlü ve kilitlenebilir yan alüminyum/abs korkuluklar",
    ],
    process: [
      "Hastanın kilosuna, yatış süresine ve hastalığın türüne (örneğin solunum güçlüğü varsa dik oturabilme ihtiyacı) göre motor sayısı belirlenir.",
      "Evinizde hasta yatağının kurulacağı en uygun, havadar ve prize yakın alan seçilir.",
      "Yetkili personel tarafından hasta yatağı motorları, serum askısı ve korkuluklar kurularak test edilir.",
      "Hasta yakınına kumanda kullanımı, motor pozisyonları ve kilitlenebilir tekerleklerin işlevi detaylıca aktarılır.",
    ],
    sections: [
      {
        title: "Motorlu Hasta Yatağı Neden Önemli?",
        paragraphs: [
          "Standart ev yatakları, hastanın yemek yemesi, ilaçlarını alması veya doğrulması için uygun ergonomiyi sağlamaz ve yatak yarası (bası yarası) oluşumuna davetiye çıkarır.",
          "Motorlu hasta yatakları sayesinde hastanın sırt kısmı istenilen dereceye kadar kaldırılabilir, ayak ucu yüksekliği ayarlanabilir ve böylece kan dolaşımı desteklenerek hastanın fiziksel rahatlaması sağlanır."
        ],
      },
      {
        title: "Hangi Modeli Seçmeliyim?",
        paragraphs: [
          "2 Motorlu Hasta Yatakları: Baş ve ayak kısmı hareket edebilen, standart evde bakım süreçleri için en çok tercih edilen fiyat/performans ürünleridir.",
          "3 ve 4 Motorlu Hasta Yatakları (Asansörlü Modeller): Baş ve ayak hareketine ek olarak, hasta yatağı tamamen aşağı/yukarı hareket edebilir. Özellikle hasta altı temizliği ve hastanın yatağa transferi sırasında bakıcının bel sağlığını korumak için çok önemlidir."
        ],
      },
    ],
    beforeCare: [
      "Hasta yatağının kurulacağı odayı ve ölçülerini önceden belirleyin (Standart hasta yatağı ölçüleri 90x200 cm civarıdır).",
      "Yatağın kurulacağı alanda, motorların kesintisiz çalışması için kolay erişilebilir bir elektrik prizi bulunduğundan emin olun.",
      "Eğer hasta riskli hareketler yapabiliyorsa, tam kapalı abs (plastik) korkuluklu modelleri tercih ettiğinizi ekibimize bildirin.",
    ],
    afterCare: [
      "Kumanda kablolarının hasta yatağı hareketleri sırasında mekanizmaya sıkışmadığından emin olun.",
      "Kilitli tekerlekleri sadece temizlik yaparken veya hasta yatağının yerini değiştirirken açın, normal şartlarda daima kilitli konumda bırakın.",
      "Elektrik kesintilerinde veya mekanik sorunlarda zorlayıcı müdahalelerden kaçınarak teknik destek ekibimizle iletişime geçin.",
    ],
    faqs: [
      {
        id: "hasta-yatagi-teslimat-kurulum",
        question: "Hasta yatağı teslimat ve kurulumu nasıl yapılır?",
        answer: "Stok, teslimat bölgesi ve kurulum koşulları sipariş öncesinde netleştirilir. Ürün tesliminde hasta yatağı fonksiyonları kontrol edilerek temel kullanım bilgileri paylaşılır."
      },
      {
        id: "hasta-yatagi-havali-yatak",
        question: "Hasta yatağı aldığımda üzerine havalı yatak sermeli miyim?",
        answer: "Uzun süre yatağa bağımlı kişilerde bası yarası riski sağlık profesyoneli tarafından değerlendirilmelidir. Uygun havalı yatak tipi; hastanın durumu, kilosu ve bakım planına göre seçilmelidir."
      }
    ],
    relatedBlogSlugs: [
      "evde-hasta-bakimi-en-uygun-hasta-yatagi-nasil-secilir",
      "bas-yarasi-nasil-onlenir-dogru-havali-yatak-kullanimi",
    ]
  },
  "solunum-cihazi": {
    eyebrow: "Ordu Solunum Cihazları",
    metaTitle: "Solunum Cihazları ve Oksijen Cihazı",
    metaDescription: "Ordu Altınordu'da oksijen konsantratörü, CPAP, BPAP ve nebulizatör seçenekleri. Reçetenize uygun cihaz, stok ve ürün bilgisi için bize ulaşın.",
    keywords: ["Ordu solunum cihazı", "oksijen konsantratörü Ordu", "KOAH cihazı", "CPAP cihazı Ordu", "nebulizatör", "Oksijen tüpü"],
    intro: "KOAH, astım, uyku apnesi veya farklı solunum ihtiyaçlarında kullanılacak cihazın hekim reçetesi ve raporuna uygun seçilmesi önemlidir. Ordu Yaşam Medikal olarak 5 ve 10 litre kapasiteli oksijen konsantratörleri ile CPAP/BPAP cihaz seçenekleri hakkında ürün ve stok bilgisi sunuyoruz.",
    highlights: [
      "Klinik standartlarda yüksek oksijen saflığı oranı (%93 ± 3)",
      "Kesintisiz ev tipi ve taşınabilir bataryalı model seçenekleri",
      "7/24 çalışabilen, sessiz ve düşük enerji tüketimli motor yapısı",
      "Hekim reçetesine ve cihaz raporuna tam uyumlu maske donanımları",
    ],
    process: [
      "Hastanın doktoru tarafından yazılan reçete ve cihaz raporu değerlendirilerek doğru cihaz (Oksijen Konsantratörü, BPAP vb.) belirlenir.",
      "Hava yolu basıncı veya oksijen debisi, hekim reçetesi ya da raporunda belirtilen değerlere göre yetkili personel tarafından cihaza tanımlanır.",
      "Cihaz adrese teslim edilip su kabının doldurulması ve filtre temizliği detaylarıyla gösterilir.",
      "Hasta uyum süreci için takip yapılır, oksijen maskesi veya nazal kanül (burunluk) kullanımında konfor ayarlamaları sağlanır.",
    ],
    sections: [
      {
        title: "Ev Tipi Oksijen Konsantratörü Kullanımı",
        paragraphs: [
          "Oksijen konsantratörleri ortamdaki havayı alıp ayrıştırarak hastaya %90'ın üzerinde saf oksijen veren, dolum gerektirmeyen (oksijen tüplerinden farklı) kesintisiz tıbbi cihazlardır.",
          "Nemlendirici hazne kullanılacaksa su türü, dolum seviyesi ve temizlik sıklığı için cihazın üretici kılavuzu ile sağlık profesyonelinin önerisi esas alınmalıdır."
        ],
      },
      {
        title: "CPAP ve BPAP Cihazları",
        paragraphs: [
          "Uyku apnesinde hekim tarafından reçete edilen CPAP ve BPAP cihazları, uyku sırasında hava yolunun açık tutulmasına destek olur.",
          "Bu cihazların verimli olması, hastanın yüz hatlarına uygun, sızdırma yapmayan silikon maskelerin seçilmesine bağlıdır."
        ],
      },
    ],
    beforeCare: [
      "Cihaz alımından önce hekiminizin yazmış olduğu cihaz türünü, litre kapasitesini ve kullanım saatlerini (sadece gece veya 24 saat) kesinleştirin.",
      "Kullanım kolaylığı için cihazın ses seviyesi (desibel) değerini ve elektrik tüketimini sorgulayın.",
      "Hastanın cilt yapısına ve yatarak kullanım pozisyonuna uygun doğru CPAP/Aronomi maskesini deneyerek seçin.",
    ],
    afterCare: [
      "Cihazın dış arka filtresini düzenli olarak (haftada bir) yıkayıp tamamen kurutarak veya değiştirerek motorun hava akışını ferah tutun.",
      "Nemlendirici su şişesini her gün döküp yıkayın ve yeni temiz su ekleyin; su kabında bakteri üremesine asla izin vermeyin.",
      "Cihazı duvara, yatağa veya perdeye tamamen yapıştırmayın; cihazın fan kısmının çevresinde en az 15 cm havalandırma boşluğu bırakın.",
    ],
    faqs: [
      {
        id: "oksijen-cihazi-sesli-mi",
        question: "Oksijen konsantratörleri çok ses yapar mı, uyku sırasında rahatsız eder mi?",
        answer: "Yeni nesil cihazlarımız kompresör izolasyonu sayesinde oldukça düşük ses seviyelerinde (40 dB altı) çalışır. Gece uyurken hastayı rahatsız etmez."
      },
      {
        id: "oksijen-tupu-ve-konsantrator",
        question: "Oksijen tüpü ile oksijen konsantratörü arasındaki fark nedir?",
        answer: "Oksijen tüpü içerisindeki gaz bitince yeniden doldurulması gerekir (acil ve kısa süreli transferler için uygundur). Konsantratör ise elektriğe bağlı olduğu sürece havadaki oksijeni süzerek sınırsız tıbbi oksijen üretir."
      }
    ],
    relatedBlogSlugs: ["astim-koah-nebulizator-secimi-ve-kullanim-ipuclari"]
  },
  "hasta-bezi": {
    eyebrow: "Ordu Hasta Bezi ve Emici Ürünler",
    metaTitle: "Yetişkin Hasta Bezi Çeşitleri",
    metaDescription: "Ordu'da bağlamalı ve emici külot tipi hasta bezleri, yatak koruyucu örtüler. Cilt dostu, yüksek emiciliğe sahip medikal hasta bezleri.",
    keywords: ["Ordu hasta bezi", "yetişkin bezi Ordu", "emici külot", "yatak koruyucu örtü", "sızdırmaz hasta bezi", "Altınordu medikal"],
    intro: "Yatalak hastalar, inkontinans (idrar kaçırma) problemi yaşayan yetişkinler ve ileri yaştaki büyüklerimiz için yaşam konforunu koruyan temel ürünlerin başında hasta bezleri gelir. Ordu Yaşam Medikal'de farklı beden ve emicilik seviyelerine sahip hasta bezi seçenekleri hakkında bilgi alabilir, güncel stok durumunu öğrenebilirsiniz.",
    highlights: [
      "Orta, Büyük (L) ve Ekstra Büyük (XL) geniş beden yelpazesi",
      "Bağlamalı (belden bantlı) ve Külot Tipi (giyilebilir) model seçenekleri",
      "Ekstra sıvı hapsetme kapasitesi ve koku önleyici nefes alabilen dış yüzey",
      "Sızıntıyı önleyen çift katmanlı bacak bariyerleri ve ıslaklık göstergesi",
    ],
    process: [
      "Hastanın hareketliliğine göre model seçimi yapılır (Yatan hastalar için bağlamalı, ayaktaki hastalar için külot tipi).",
      "Bel çevresi ölçülerek tam uyumlu (S, M, L, XL) beden tespit edilir.",
      "Kullanım sıklığı ve hastanın sıvı tüketimine göre emicilik damla seviyesi yüksek olan markalar önerilir.",
      "Koli bazlı siparişlerde stok ve Ordu içi teslimat koşulları sipariş öncesinde paylaşılır.",
    ],
    sections: [
      {
        title: "Külot Bez mi, Bantlı Bez mi?",
        paragraphs: [
          "Bantlı (Bağlamalı) Hasta Bezleri: Tamamen yatağa bağımlı ve kendi başına hareket edemeyen hastalar için refakatçinin bezi değiştirmesi ve hastanın alt bakımını yapması açısından en uygun modeldir.",
          "Emici Külot Bezler: Ayakta durabilen, yürüyebilen veya fizik tedavi gören, günlük sosyal hayata karışan hastalar için iç çamaşırı gibi giyilip çıkarılan, dışarıdan belli olmayan konforlu ürünlerdir."
        ],
      },
      {
        title: "Yatak Koruyucu Örtü Kullanımı",
        paragraphs: [
          "Hasta bezine ek olarak, hasta yatağı yüzeyini sıvıdan korumak için 60x90 cm ebatlarında yatak koruyucu serpmeler kullanılmalıdır.",
          "Bu örtüler sızıntı anında şilteyi korur ve yıkama derdini ortadan kaldırarak hijyenik ortamın sürekliliğini sağlar."
        ],
      },
    ],
    beforeCare: [
      "Yanlış beden seçimi sızıntıya yol açar. Hastanın basen ve bel çevresini mezura ile ölçerek beden tablolarına uygun alım yapın.",
      "Hastanın cilt dokusunun pamuklu veya tekstil yüzeyli bezlere nasıl tepki verdiğini, kızarıklık oluşup oluşmadığını gözlemleyin.",
      "Pişik durumlarını önlemek için hasta alt temizleme havluları ve çinko oksit bazlı pişik kremlerini bezle birlikte temin etmeyi unutmayın.",
    ],
    afterCare: [
      "Bez değişimi sırasında cildi mutlaka nazikçe temizleyin ve tamamen kuruduğundan emin olduktan sonra yeni bezi bağlayın.",
      "Külot bezleri çıkarırken yan taraflarındaki dikiş yerlerinden yırtarak çok daha pratik bir şekilde hastadan uzaklaştırabilirsiniz.",
      "Bezin dış yüzeyindeki ıslaklık göstergesindeki renk değişimini takip ederek, cildin idrarla uzun süre temas etmesine fırsat vermeden bezi değiştirin.",
    ],
    faqs: [
      {
        id: "hasta-bezi-beden",
        question: "Büyük beden aldığımda daha fazla mı sıvı emer?",
        answer: "Hayır, bu çok sık yapılan bir hatadır. Bedenin büyük olması emiciliği artırmaz, aksine bacak arasından ve belden boşluk kalmasına sebep olarak idrarın dışarı sızmasına neden olur. Doğru olan, hastanın ölçülerine tam oturan bezi seçmektir."
      },
      {
        id: "hasta-bezi-devlet-karsilamasi",
        question: "Yatan hasta bezi kullanımında pişik olmaması için ne yapılmalı?",
        answer: "Düzenli aralıklarla (ideali 4-6 saatte bir) bez değiştirilmeli, cilt pH değerine uygun medikal temizleme mendilleri kullanılmalı ve çinko içerikli cilt bariyer kremleri uygulanmalıdır."
      }
    ],
    relatedBlogSlugs: ["evde-hasta-bakimi-en-uygun-hasta-yatagi-nasil-secilir"]
  },
  "havali-yatak": {
    eyebrow: "Ordu Havalı Yatak",
    metaTitle: "Havalı Yatak Fiyatları ve Modelleri",
    metaDescription: "Bası yarasını önleyen boru tipi ve baklava tipi motorlu havalı yataklar. Ordu'da uzun süreli yatan hastalar için havalı yatak çözümleri.",
    keywords: ["Ordu havalı yatak", "boru tipi havalı yatak", "baklava tipi yatak", "yatak yarası önleyici", "bası yarası yatağı"],
    intro: "Hareketi kısıtlı ve uzun süre aynı pozisyonda kalan kişilerde bası (yatak) yarası riski oluşabilir. Motorlu havalı yatak sistemleri, temas basıncının dönüşümlü dağıtılmasına yardımcı olabilir. Uygun model hastanın durumu, kilosu ve sağlık profesyonelinin bakım önerileri dikkate alınarak seçilmelidir.",
    highlights: [
      "Evre 1 ve Evre 2 bası yaraları için Baklava Tipi modeller",
      "Ağır yatalak ve felçli hastalar için ileri düzey A+B / A+B+C Boru Tipi modeller",
      "7/24 sessiz çalışan, basınç ayarlı hava kompresörü",
      "Lazer delikli ventilasyon (hava üfleme) sayesinde terlemeyi önleme özelliği",
    ],
    process: [
      "Hastanın yatış süresi, kilosu ve hali hazırda yatak yarası olup olmadığı değerlendirilir.",
      "Duruma göre boru veya baklava tipi havalı yatak modeli tavsiye edilir.",
      "Motor kompresörü yatağın ayak ucuna asılır, hortumlar bağlanır ve motor fişe takılır.",
      "Şişirme basıncı, kompresör üzerindeki ayar düğmesinden hastanın kilosuna göre optimize edilir.",
    ],
    sections: [
      {
        title: "Boru Tipi mi, Baklava Tipi mi?",
        paragraphs: [
          "Baklava Tipi Havalı Yataklar: Kısa süreli yatan, hafif kilolu hastalar için ekonomik çözümlerdir. Hücreleri baklava dilimi şeklindedir ve bir taraf inerken diğer taraf şişer.",
          "Boru Tipi Havalı Yataklar: Uzun süreli yatışlarda değerlendirilebilen, yatay hücrelerden oluşan modellerdir. Ventilasyon özelliği bulunan modeller hava dolaşımına yardımcı olabilir; uygun ürün seçimi bakım ihtiyacına göre yapılmalıdır."
        ],
      },
      {
        title: "Havalı Yatak Çalışma Prensibi",
        paragraphs: [
          "Havalı yatak motoru, şiltenin içerisindeki hava kanallarını periyodik döngülerle (örneğin 5-10 dakikada bir) şişirir ve indirir.",
          "Bu dönüşümlü hareket, vücudun aynı noktalarına sürekli basınç uygulanmasını azaltmaya yardımcı olur. Havalı yatak kullanımı düzenli pozisyon değişimi ve klinik bakımın yerine geçmez."
        ],
      },
    ],
    beforeCare: [
      "Motorlu hasta yatağına veya standart ev yatağına serilebilir, ancak altta düz ve kesici olmayan bir zemin olduğundan emin olun.",
      "Hastanın kilosunu ekibimize doğru bildirin; aşırı kilolu (obez) hastalar için daha kalın ve çift katmanlı özel boru tipi şilteler kullanılmalıdır.",
      "Havalı yatağın üzerine çok kalın pamuklu yorgan veya ağır battaniyeler sermeyin; bu, hücrelerin hastanın kan dolaşımına yaptığı masaj etkisini yok eder.",
    ],
    afterCare: [
      "Havalı yatak motoru, hasta yatakta olduğu MÜDDETÇE gece gündüz 7/24 prizde takılı ve ÇALIŞIR VAZİYETTE olmalıdır. Kapatılması halinde yara önleyici özelliği biter.",
      "Şiltenin sivri uçlu (makas, tırnak, iğne) cisimlerden korunmasına özen gösterin.",
      "Şilte temizliğini çamaşır makinesinde yapmayın; sadece nemli ve sabunlu bir bezle yüzeyden silerek kurulayın.",
    ],
    faqs: [
      {
        id: "havali-yatak-kapatilir-mi",
        question: "Havalı yatak motoru geceleri kapatılır mı?",
        answer: "Kullanım süresi modele göre değişebileceğinden üreticinin kullanım kılavuzu esas alınmalıdır. Sürekli çalışma için tasarlanmış modellerde motorun kapatılması yatağın basınç döngüsünü durdurabilir."
      },
      {
        id: "havali-yatak-patlarsa",
        question: "Boru tipi yatak delinirse ne olur?",
        answer: "Boru tipi yatakların en büyük avantajı hücrelerinin bağımsız olmasıdır. Bir boru delindiğinde tüm yatak atılmaz; klipsinden çıkarılarak sadece o boru değiştirilir ve yatak kullanılmaya devam edilir."
      }
    ],
    relatedBlogSlugs: ["bas-yarasi-nasil-onlenir-dogru-havali-yatak-kullanimi"]
  },
  "tansiyon-aleti": {
    eyebrow: "Ordu Tansiyon Aleti",
    metaTitle: "Tansiyon Aleti Koldan ve Bilekten",
    metaDescription: "Ordu Altınordu'da koldan ve bilekten ölçen dijital tansiyon aleti modelleri. Ürün özellikleri, stok ve fiyat bilgisi için bize ulaşın.",
    keywords: ["Tansiyon aleti Ordu", "koldan tansiyon aleti", "bilekten tansiyon aleti", "dijital tansiyon aleti", "Altınordu medikal"],
    intro: "Evde kan basıncı takibi için doğru manşet ölçüsüne ve güvenilir ölçüm özelliklerine sahip bir cihaz seçmek önemlidir. Ordu Yaşam Medikal olarak koldan ve bilekten ölçen dijital tansiyon aleti modellerinin özellikleri hakkında bilgi veriyor, ihtiyaca uygun ürün seçimine yardımcı oluyoruz.",
    highlights: [
      "Tam otomatik, tek tuşla koldan ve bilekten ölçüm seçenekleri",
      "Düzensiz kalp atışı (Aritmi) tespiti ve uyarı sistemi",
      "Önceki ölçümleri saat ve tarihiyle kaydeden geniş hafıza kapasitesi",
      "Modeline göre klinik validasyon bilgisi bulunan cihaz seçenekleri",
    ],
    process: [
      "Hastanın kullanım alışkanlığına ve kol kalınlığına uygun (standart manşet veya geniş manşet) alet modeli tavsiye edilir.",
      "Bilekten ölçen veya koldan ölçen cihazlar arasındaki farklar anlatılır.",
      "Cihazın ilk kurulumu (pil/adaptör), tarih ve saat ayarları ekibimizce yapılır.",
      "Hasta veya hasta yakınına tansiyon aletinin bileğe/kola nasıl doğru şekilde sarılacağı uygulamalı olarak gösterilir.",
    ],
    sections: [
      {
        title: "Koldan Ölçer mi, Bilekten Ölçer mi?",
        paragraphs: [
          "Koldan Ölçen Tansiyon Aletleri: Sağlık Bakanlığı rehberlerinde evde takip için uygun manşetli, onaylı ve koldan ölçen otomatik cihazların kullanımı öne çıkarılır.",
          "Bilekten Ölçen Tansiyon Aletleri: Çok sık seyahat edenler, ofiste veya dışarıda sürekli ölçüm yapması gerekenler için son derece pratik, taşınabilir modellerdir. Ancak ölçüm sırasında bileğin tam kalp hizasında tutulması şarttır."
        ],
      },
      {
        title: "Tansiyon Ölçerken Yapılan Hatalar",
        paragraphs: [
          "Yemekten hemen sonra, çay/kahve tüketimi veya egzersiz sonrasında yapılan ölçümler yanıltıcı derecede yüksek çıkabilir.",
          "Ölçüm esnasında konuşmak, bacak bacak üstüne atmak veya kolu boşlukta (desteksiz) tutmak, cihazın hatalı sonuç vermesine neden olur."
        ],
      },
    ],
    beforeCare: [
      "Ölçüm yapılacak kişinin kol kalınlığı önemlidir (Obezite durumunda standart manşet dar gelebilir, geniş/large manşet tercih edilmelidir).",
      "Eğer pille kullanım yerine doğrudan prize takmak istiyorsanız, adaptör girişli olan modelleri tercih ettiğinizi belirtin.",
      "Görme veya duyma problemi olan yaşlı hastalarımız için, 'Türkçe sesli konuşma' özelliğine sahip veya ekstra büyük LCD ekranlı modeller mevcuttur.",
    ],
    afterCare: [
      "Cihazın kumaş manşetini çamaşır makinesinde yıkamayın, sadece hafif nemli bezle silin; aksi takdirde içindeki hava kesesi patlayabilir.",
      "Cihazı uzun süre (1 aydan fazla) kullanmayacaksanız, pillerin akarak elektronik karta zarar vermesini önlemek için pilleri yuvasından çıkarın.",
      "Tansiyon aletini yere düşürmekten, sert darbelerden ve doğrudan güneş ışığında bırakmaktan kaçının.",
    ],
    faqs: [
      {
        id: "dijital-tansiyon-guvenilir-mi",
        question: "Dijital tansiyon aletleri ne kadar güvenilirdir?",
        answer: "Medikal onaylı ve klinik validasyonu yapılmış olan (CE belgeli) dijital cihazlar, hastanelerdeki cıvalı veya stetoskoplu klasik cihazlar kadar yüksek doğruluk oranına sahiptir."
      },
      {
        id: "tansiyon-olcum-zamani",
        question: "Tansiyon ölçümü ne zaman yapılmalıdır?",
        answer: "Doktorunuz aksini belirtmedikçe en ideal zaman; sabah uyanıp tuvalet ihtiyacı giderildikten sonra (kahvaltıdan ve ilaçlardan önce) ve akşam yemeğinden hemen önceki saatlerdir."
      }
    ],
    relatedBlogSlugs: ["tansiyon-aleti-alirken-dikkat-edilmesi-gerekenler"]
  },
  "akulu-sandalye": {
    eyebrow: "Ordu Akülü Tekerlekli Sandalye",
    metaTitle: "Akülü Tekerlekli Sandalye",
    metaDescription: "Ordu Altınordu'da joystick kontrollü akülü tekerlekli sandalye modelleri. Kullanıcıya uygun ürün seçimi, teslimat ve kullanım desteği.",
    keywords: ["Ordu akülü sandalye", "akülü tekerlekli sandalye", "motorlu sandalye Ordu", "joystick kontrollü sandalye", "Altınordu medikal"],
    intro: "Akülü tekerlekli sandalyeler, kol gücü sınırlı veya bağımsız hareket etmek isteyen kullanıcıların günlük yaşamını kolaylaştırır. Ordu Yaşam Medikal olarak kullanıcının fiziksel özelliklerine, kullanım alanına ve taşıma ihtiyacına uygun joystick kontrollü modellerin seçiminde destek sağlıyoruz.",
    highlights: [
      "Kolay öğrenilen joystick kontrol sistemi",
      "Katlanabilir ve sabit şasi model seçenekleri",
      "Kullanıcı ölçülerine uygun oturma alanı alternatifleri",
      "Teslimat sırasında kullanım ve şarj bilgilendirmesi",
    ],
    process: [
      "Kullanıcının boyu, kilosu, oturma dengesi ve hareket kabiliyeti değerlendirilir.",
      "Ev içi, dış mekân veya karma kullanım ihtiyacına göre uygun şasi ve motor tipi belirlenir.",
      "Kapı genişliği, rampa eğimi ve araçta taşıma gibi günlük kullanım koşulları gözden geçirilir.",
      "Teslimat sırasında joystick, fren, serbest sürüş ve şarj işlemleri uygulamalı olarak anlatılır.",
    ],
    sections: [
      {
        title: "Akülü sandalye seçerken nelere dikkat edilmeli?",
        paragraphs: [
          "Doğru model yalnızca motor gücüne göre seçilmez. Oturma genişliği, taşıma kapasitesi, toplam ürün ağırlığı, dönüş çapı ve batarya menzili birlikte değerlendirilmelidir.",
          "Dar ev alanlarında kompakt dönüş çapına sahip modeller öne çıkarken, dış mekânda kullanılacak sandalyelerde tekerlek yapısı, süspansiyon ve zemin uyumu daha fazla önem taşır.",
        ],
      },
      {
        title: "Katlanabilir ve sabit şasi modeller",
        paragraphs: [
          "Katlanabilir akülü sandalyeler araç bagajında taşıma kolaylığı sağlar. Ürünün katlanmış ölçüsü ve ağırlığı, araca yükleme yapacak kişinin kapasitesiyle birlikte değerlendirilmelidir.",
          "Sabit şasili modeller ise uzun süreli kullanımda daha geniş oturma seçenekleri ve güçlü dış mekân donanımları sunabilir. En uygun seçim kullanıcının günlük rutinine göre yapılmalıdır.",
        ],
      },
    ],
    beforeCare: [
      "Kullanılacak kapıların, asansörün ve koridorların genişliğini ölçün.",
      "Kullanıcının kilosunu ve ihtiyaç duyduğu oturma genişliğini doğru belirleyin.",
      "Sandalyenin araçta taşınıp taşınmayacağını ve şarj edileceği alanı önceden planlayın.",
    ],
    afterCare: [
      "Bataryayı üretici talimatlarına uygun şarj edin ve uzun süre tamamen boş bırakmayın.",
      "Lastik, fren, joystick ve kablo bağlantılarını düzenli olarak gözden geçirin.",
      "Elektronik aksamı yoğun sudan ve doğrudan yağıştan koruyun; arıza halinde yetkili teknik destek alın.",
    ],
    faqs: [
      {
        id: "akulu-sandalye-menzil",
        question: "Akülü tekerlekli sandalye tek şarjla ne kadar gider?",
        answer: "Menzil; batarya kapasitesi, kullanıcı ağırlığı, zemin eğimi, hava koşulları ve sürüş alışkanlığına göre değişir. Kesin menzil için seçilen modelin üretici verileri esas alınmalıdır.",
      },
      {
        id: "akulu-sandalye-aracta-tasinir-mi",
        question: "Akülü sandalye araç bagajında taşınabilir mi?",
        answer: "Katlanabilir ve bataryası ayrılabilen bazı modeller uygun bagaj hacminde taşınabilir. Satın almadan önce ürünün katlanmış ölçüsü, ağırlığı ve aracın bagaj kapasitesi birlikte kontrol edilmelidir.",
      },
    ],
    relatedBlogSlugs: ["medikal-cihaz-satin-alma-rehberi"],
  },
  "uyku-apne-cihazi": {
    eyebrow: "Ordu CPAP ve BPAP Cihazları",
    metaTitle: "CPAP ve BPAP Uyku Apne Cihazı",
    metaDescription: "Ordu Altınordu'da CPAP ve BPAP uyku apne cihazları, maske seçenekleri ve kullanım desteği. Reçetenize uygun cihaz için bilgi alın.",
    keywords: ["Ordu uyku apne cihazı", "CPAP cihazı Ordu", "BPAP cihazı", "uyku apnesi maskesi", "Altınordu solunum cihazı"],
    intro: "CPAP ve BPAP cihazları, hekim tarafından uyku apnesi veya belirli solunum problemleri için önerilen basınçlı hava destek cihazlarıdır. Ordu Yaşam Medikal olarak reçete ve raporda belirtilen cihaz türüne uygun ürün ve maske seçenekleri hakkında bilgi veriyor, cihazın temel kullanım ve bakım adımlarını teslimat sırasında açıklıyoruz.",
    highlights: [
      "CPAP, Auto CPAP ve BPAP cihaz seçenekleri",
      "Burun, burun-yüz ve tam yüz maske alternatifleri",
      "Nemlendirici hazneli ve veri takibi sunan model seçenekleri",
      "Teslimat sırasında temel kullanım ve bakım desteği",
    ],
    process: [
      "Hekim reçetesi veya cihaz raporunda belirtilen cihaz türü ve tedavi bilgileri kontrol edilir.",
      "Yüz yapısı, uyku pozisyonu ve kullanım alışkanlığına göre uygun maske tipi belirlenir.",
      "Cihazın nemlendirici haznesi, hortumu, filtresi ve maske bağlantısı gösterilir.",
      "Temizlik, filtre değişimi ve olası hava kaçağının kontrolü hakkında kullanıcı bilgilendirilir.",
    ],
    sections: [
      {
        title: "CPAP ve BPAP arasındaki fark nedir?",
        paragraphs: [
          "CPAP cihazları hava yolunu açık tutmak için sürekli pozitif hava basıncı sağlar. Auto CPAP modelleri, cihaz özelliklerine göre basıncı belirlenen aralıkta otomatik ayarlayabilir.",
          "BPAP cihazları nefes alma ve nefes verme sırasında farklı basınç seviyeleri uygular. Hangi cihazın ve hangi ayarların kullanılacağı yalnızca hekim değerlendirmesi ve reçetesi doğrultusunda belirlenmelidir.",
        ],
      },
      {
        title: "Doğru maske seçimi neden önemlidir?",
        paragraphs: [
          "Yüze uygun olmayan bir maske hava kaçağına, ciltte baskıya ve uyku sırasında rahatsızlığa neden olabilir. Bu durum cihaz kullanımına uyumu düşürebilir.",
          "Maske tipi seçilirken ağızdan nefes alma, burun tıkanıklığı, yüz yapısı ve uyku pozisyonu dikkate alınmalıdır. Maske çok sıkı bağlanmadan dengeli biçimde oturmalıdır.",
        ],
      },
    ],
    beforeCare: [
      "Cihaz türü ve basınç ayarları için hekiminizin reçete veya raporunu hazır bulundurun.",
      "Ağızdan nefes alma, burun tıkanıklığı veya hassas cilt gibi durumları maske seçimi sırasında belirtin.",
      "Seyahat ihtiyacınız varsa cihaz ölçüsü, ağırlığı ve güç seçeneklerini değerlendirin.",
    ],
    afterCare: [
      "Maske, hortum, nemlendirici hazne ve filtreyi üreticinin temizlik talimatlarına göre düzenli temizleyin.",
      "Cihaz ayarlarını hekiminizin bilgisi dışında değiştirmeyin.",
      "Belirgin hava kaçağı, cilt tahrişi veya tedaviye uyum sorunu yaşarsanız hekiminiz ve cihaz desteğiyle iletişime geçin.",
    ],
    faqs: [
      {
        id: "cpap-bpap-ayari",
        question: "CPAP veya BPAP basınç ayarını kendim değiştirebilir miyim?",
        answer: "Hayır. Tedavi basıncı hekim değerlendirmesi ve reçetesi doğrultusunda belirlenmelidir. Kullanıcı tarafından kontrolsüz yapılan değişiklikler tedavinin etkinliğini olumsuz etkileyebilir.",
      },
      {
        id: "uyku-apne-maskesi-secimi",
        question: "Hangi uyku apne maskesini seçmeliyim?",
        answer: "Uygun maske; yüz yapısı, ağızdan nefes alma durumu, uyku pozisyonu ve cihaz tipine göre değişir. Hava kaçağı yapmadan rahat oturan bir model tercih edilmelidir.",
      },
    ],
    relatedBlogSlugs: ["astim-koah-nebulizator-secimi-ve-kullanim-ipuclari"],
  }
};

function buildServiceSeo(service: (typeof services)[number], detail: ServiceDetailContent): SEOFields {
  return {
    ...service.seo,
    metaTitle: detail.metaTitle,
    metaDescription: detail.metaDescription,
    ogTitle: `${detail.metaTitle} | ${businessInfo.name}`,
    ogDescription: detail.metaDescription,
    keywords: detail.keywords,
  };
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

type ServiceDetailLayoutProps = {
  service: (typeof services)[number];
  detail: ServiceDetailContent;
  breadcrumbs: { label: string; href: string }[];
  relatedServices: typeof services;
  relatedBlogs: typeof blogPosts;
  whatsappHref: string;
  serviceSchema: Record<string, unknown>;
};

function ServiceDetailLayout({
  service,
  detail,
  breadcrumbs,
  relatedServices,
  relatedBlogs,
  whatsappHref,
  serviceSchema,
}: ServiceDetailLayoutProps) {
  return (
    <article className="bg-[#F7EFE6] text-[#3A2A24]">
      <JsonLd data={serviceSchema} />
      <JsonLd data={generateFAQSchema(detail.faqs)} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      <section className="scroll-reveal service-scroll px-4 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.78fr)] lg:items-end">
            <div className="pb-2 lg:pb-10">
              <p className="page-intro__label text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
                {detail.eyebrow}
              </p>
              <h1 className="page-intro__title mt-5 max-w-4xl font-serif text-5xl font-medium leading-[0.96] text-[#3A2A24] sm:text-7xl">
                {service.title}
              </h1>
              <p className="page-intro__description mt-7 max-w-3xl text-lg leading-9 text-[#3A2A24]/76">
                {detail.intro}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-full bg-[#8F4B38] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#3A2A24]"
                >
                  WhatsApp'tan Bilgi Al
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex justify-center rounded-full border border-[#8F4B38]/45 px-7 py-3.5 text-sm font-semibold text-[#4C362E] transition hover:-translate-y-0.5 hover:border-[#8F4B38] hover:text-[#7A3429]"
                >
                  İletişim Bilgileri
                </Link>
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-lg bg-[#E8C9B2] sm:min-h-[500px] lg:min-h-[610px]">
              <Image
                src={service.image}
                alt={`${service.title} - ${businessInfo.name}`}
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-reveal service-scroll px-4 pb-14 pt-6 sm:px-6 sm:pb-18 lg:px-8">
        <div className="mx-auto max-w-7xl border-y border-[#DDB89F]/70">
          <dl className="grid divide-y divide-[#DDB89F]/70 text-sm md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="flex items-center justify-between gap-4 py-5 md:px-6">
              <dt className="text-[#5F4E46]">Teslimat</dt>
              <dd className="font-semibold text-[#2F211C]">{service.duration}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 py-5 md:px-6">
              <dt className="text-[#5F4E46]">Fiyat</dt>
              <dd className="text-right font-semibold text-[#2F211C]">{service.priceText}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 py-5 md:px-6">
              <dt className="text-[#5F4E46]">Konum</dt>
              <dd className="font-semibold text-[#2F211C]">
                {businessInfo.district} / {businessInfo.city}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="scroll-reveal service-scroll px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
              Öne Çıkanlar
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#2F211C]">
              Ürün özeti
            </h2>
          </div>

          <div className="grid border-t border-[#DDB89F]/70 md:grid-cols-2">
            {detail.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex gap-4 border-b border-[#DDB89F]/70 py-5 md:odd:border-r md:odd:pr-6 md:even:pl-6"
              >
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#8F4B38] text-white">
                  <CheckIcon />
                </span>
                <p className="text-sm font-semibold leading-7 text-[#3A2A24]">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-reveal service-scroll bg-[#E8C9B2] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
                Süreç
              </p>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-[#3A2A24] sm:text-5xl">
                Sipariş ve teslimat süreci nasıl ilerler?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#3A2A24]/78">
                Her üründe amaç, ihtiyacı doğru anlamak ve teslimat sonrası kullanım bilgilerini
                açık şekilde paylaşmaktır.
              </p>
            </div>

            <ol className="grid border-t border-[#B98266]/45">
              {detail.process.map((step, index) => (
                <li
                  key={step}
                  className="grid gap-4 border-b border-[#B98266]/45 py-6 sm:grid-cols-[72px_1fr]"
                >
                  <span className="font-serif text-4xl leading-none text-[#8F4B38]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="self-center text-base leading-8 text-[#3A2A24]/82">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="scroll-reveal service-scroll px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
          <div className="grid gap-12">
            {detail.sections.map((section) => (
              <section
                key={section.title}
                className="border-b border-[#DDB89F]/65 pb-12 last:border-b-0 last:pb-0"
              >
                <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#2F211C]">
                  {section.title}
                </h2>
                <div className="mt-5 grid max-w-3xl gap-5 text-base leading-8 text-[#3A2A24]/80">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="border-t border-[#8F4B38]/45 pt-6 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#7A3429]">
              Ürün Bilgisi
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#2F211C]">
              {service.title} için bilgi alın
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#5F4E46]">
              Stok, fiyat ve teslimat koşulları için WhatsApp üzerinden bilgi alabilirsiniz.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full justify-center rounded-full bg-[#8F4B38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3A2A24]"
            >
              WhatsApp ile Sor
            </a>
          </aside>
        </div>
      </section>

      <section className="scroll-reveal service-scroll bg-[#F2DED1] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <section>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#2F211C]">
              Kullanım öncesi
            </h2>
            <ul className="mt-6 grid gap-4 border-t border-[#DDB89F]/70">
              {detail.beforeCare.map((item) => (
                <li key={item} className="flex gap-4 border-b border-[#DDB89F]/70 py-4 text-sm leading-7 text-[#3A2A24]/82">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8F4B38]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#2F211C]">
              Kullanım sonrası
            </h2>
            <ul className="mt-6 grid gap-4 border-t border-[#DDB89F]/70">
              {detail.afterCare.map((item) => (
                <li key={item} className="flex gap-4 border-b border-[#DDB89F]/70 py-4 text-sm leading-7 text-[#3A2A24]/82">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8F4B38]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <section className="scroll-reveal service-scroll px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
              Merak Edilenler
            </p>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-[#3A2A24] sm:text-5xl">
              {service.title} hakkında sık sorulan sorular
            </h2>
          </div>

          <div className="grid gap-4">
            {detail.faqs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {relatedBlogs.length > 0 ? (
        <section className="scroll-reveal service-scroll bg-[#E8C9B2] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 border-b border-[#B98266]/45 pb-6 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
                  Rehberler
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#2F211C]">
                  Bu hizmetle ilgili yazılar
                </h2>
              </div>
              <Link href="/blog" className="text-sm font-semibold text-[#7A3429] transition hover:text-[#2F211C]">
                Tüm Blog Yazıları
              </Link>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {relatedBlogs.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group grid gap-4 border-b border-[#B98266]/45 pb-6 transition hover:border-[#8F4B38]"
                >
                  <span className="relative block min-h-52 overflow-hidden rounded-lg bg-[#DDB89F]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </span>
                  <span>
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7A3429]">
                      {post.category}
                    </span>
                    <span className="mt-3 block text-lg font-semibold leading-7 text-[#2F211C]">
                      {post.title}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="scroll-reveal service-scroll px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 border-b border-[#DDB89F]/70 pb-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
                Diğer Ürünler
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#2F211C]">
                Ordu Yaşam Medikal ürünleri
              </h2>
            </div>
            <Link href="/urunler" className="text-sm font-semibold text-[#7A3429] transition hover:text-[#2F211C]">
              Tüm Ürünler
            </Link>
          </div>

          <div className="mt-2 divide-y divide-[#DDB89F]/70">
            {relatedServices.map((item) => (
              <Link
                key={item.id}
                href={`/urunler/${item.slug}`}
                className="group grid gap-2 py-6 transition hover:px-3 sm:grid-cols-[260px_1fr] sm:items-center"
              >
                <span className="text-lg font-semibold text-[#2F211C] transition group-hover:text-[#7A3429]">
                  {item.title}
                </span>
                <span className="text-sm leading-7 text-[#5F4E46]">
                  {item.shortDescription}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  const detail = serviceDetails[service.slug];

  if (!detail) {
    return generatePageMetadata(service.seo);
  }

  return generatePageMetadata(buildServiceSeo(service, detail));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const detail = serviceDetails[service.slug];

  if (!detail) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Ürünler", href: "/urunler" },
    { label: service.title, href: `/urunler/${service.slug}` },
  ];
  const serviceSchema = {
    ...generateServiceSchema(service),
    description: detail.metaDescription,
    keywords: detail.keywords,
  };
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const relatedBlogs = detail.relatedBlogSlugs
    .map((blogSlug) => blogPosts.find((post) => post.slug === blogSlug))
    .filter((post): post is (typeof blogPosts)[number] => Boolean(post));

  if (service.slug) {
    return (
      <ServiceDetailLayout
        service={service}
        detail={detail}
        breadcrumbs={breadcrumbs}
        relatedServices={relatedServices}
        relatedBlogs={relatedBlogs}
        whatsappHref={whatsappHref}
        serviceSchema={serviceSchema}
      />
    );
  }

  return (
    <article className="bg-[#F7EFE6] text-[#3A2A24]">
      <JsonLd data={serviceSchema} />
      <JsonLd data={generateFAQSchema(detail.faqs)} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      <section className="px-4 pb-14 pt-28 sm:px-6 sm:pb-18 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-7 grid gap-10 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-center">
            <div>
              <p className="page-intro__label text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
                {detail.eyebrow}
              </p>
              <h1 className="page-intro__title mt-5 max-w-4xl font-serif text-5xl font-medium leading-[0.98] text-[#3A2A24] sm:text-7xl">
                {service.title}
              </h1>
              <p className="page-intro__description mt-7 max-w-3xl text-lg leading-9 text-[#3A2A24]/76">
                {detail.intro}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-full bg-[#8F4B38] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#3A2A24]"
                >
                  WhatsApp'tan Bilgi Al
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex justify-center rounded-full border border-[#8F4B38]/45 px-7 py-3.5 text-sm font-semibold text-[#4C362E] transition hover:-translate-y-0.5 hover:border-[#8F4B38] hover:text-[#7A3429]"
                >
                  İletişim Bilgileri
                </Link>
              </div>
            </div>

            <aside className="overflow-hidden rounded-[28px] border border-[#DDB89F]/50 bg-[#FFF8F3] shadow-[0_24px_80px_rgba(58,42,36,0.08)]">
              <div className="relative min-h-[300px] bg-[#E8C9B2] sm:min-h-[380px]">
                <Image
                  src={service.image}
                  alt={`${service.title} - ${businessInfo.name}`}
                  fill
                  sizes="(min-width: 1024px) 430px, 100vw"
                  priority
                  className="object-cover"
                />
              </div>
              <div className="grid gap-4 p-6 text-sm">
                <div className="flex items-center justify-between gap-4 border-b border-[#E8C9B2]/70 pb-4">
                  <span className="text-[#5F4E46]">Teslimat</span>
                  <strong className="text-right font-semibold text-[#2F211C]">{service.duration}</strong>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-[#E8C9B2]/70 pb-4">
                  <span className="text-[#5F4E46]">Fiyat</span>
                  <strong className="text-right font-semibold text-[#2F211C]">{service.priceText}</strong>
                </div>
                <div>
                  <span className="text-[#5F4E46]">Konum</span>
                  <p className="mt-1 font-semibold text-[#2F211C]">
                    {businessInfo.district} / {businessInfo.city}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {detail.highlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-2xl border border-[#DDB89F]/55 bg-[#FFF8F3] p-5 shadow-[0_16px_45px_rgba(58,42,36,0.05)]"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#F2DED1] text-[#7A3429]">
                <CheckIcon />
              </span>
              <p className="mt-4 text-sm font-semibold leading-6 text-[#3A2A24]">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#E8C9B2] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
              Süreç
            </p>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-[#3A2A24] sm:text-5xl">
              Sipariş ve teslimat süreci nasıl ilerler?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#3A2A24]/78">
              Her üründe amaç, hastanın ihtiyacını en doğru şekilde anlamak ve teslimat sonrası dikkat
              edilecekleri açık şekilde paylaşmaktır.
            </p>
          </div>

          <div className="grid gap-4">
            {detail.process.map((step, index) => (
              <div
                key={step}
                className="grid gap-4 rounded-2xl border border-[#DDB89F]/60 bg-[#F7EFE6] p-5 shadow-[0_16px_45px_rgba(58,42,36,0.05)] sm:grid-cols-[56px_1fr]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#8F4B38] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="self-center text-sm leading-7 text-[#3A2A24]/82">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div className="grid gap-10">
            {detail.sections.map((section) => (
              <section key={section.title} className="border-b border-[#DDB89F]/55 pb-10 last:border-b-0 last:pb-0">
                <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#2F211C]">
                  {section.title}
                </h2>
                <div className="mt-5 grid max-w-3xl gap-5 text-base leading-8 text-[#3A2A24]/80">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="lg:sticky lg:top-24">
            <div className="rounded-[24px] border border-[#DDB89F]/55 bg-[#FFF8F3] p-6 shadow-[0_18px_55px_rgba(58,42,36,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#7A3429]">
                Ürün Bilgisi
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#2F211C]">
                {service.title} için bilgi alın
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#5F4E46]">
                Stok, fiyat ve teslimat koşulları için WhatsApp üzerinden bilgi alabilirsiniz.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full justify-center rounded-full bg-[#8F4B38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3A2A24]"
              >
                WhatsApp ile Sor
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#F2DED1] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <section>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#2F211C]">
              Kullanım öncesi
            </h2>
            <div className="mt-5 grid gap-3">
              {detail.beforeCare.map((item) => (
                <p key={item} className="rounded-2xl border border-[#DDB89F]/60 bg-[#F7EFE6] p-5 text-sm leading-7 text-[#3A2A24]/82">
                  {item}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#2F211C]">
              Kullanım sonrası
            </h2>
            <div className="mt-5 grid gap-3">
              {detail.afterCare.map((item) => (
                <p key={item} className="rounded-2xl border border-[#DDB89F]/60 bg-[#F7EFE6] p-5 text-sm leading-7 text-[#3A2A24]/82">
                  {item}
                </p>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
              Merak Edilenler
            </p>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-[#3A2A24] sm:text-5xl">
              {service.title} hakkında sık sorulan sorular
            </h2>
          </div>

          <div className="grid gap-4">
            {detail.faqs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {relatedBlogs.length > 0 ? (
        <section className="bg-[#E8C9B2] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 border-b border-[#DDB89F]/60 pb-6 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
                  Rehberler
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#2F211C]">
                  Bu ürünle ilgili yazılar
                </h2>
              </div>
              <Link href="/blog" className="text-sm font-semibold text-[#7A3429] transition hover:text-[#2F211C]">
                Tüm Blog Yazıları
              </Link>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {relatedBlogs.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-2xl border border-[#DDB89F]/60 bg-[#F7EFE6] shadow-[0_16px_45px_rgba(58,42,36,0.05)] transition hover:-translate-y-1"
                >
                  <span className="relative block min-h-48 bg-[#DDB89F]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </span>
                  <span className="block p-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7A3429]">
                      {post.category}
                    </span>
                    <span className="mt-3 block text-lg font-semibold leading-7 text-[#2F211C]">
                      {post.title}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 border-b border-[#DDB89F]/60 pb-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
                Diğer Ürünler
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#2F211C]">
                Ordu Yaşam Medikal ürünleri
              </h2>
            </div>
            <Link href="/urunler" className="text-sm font-semibold text-[#7A3429] transition hover:text-[#2F211C]">
              Tüm Ürünler
            </Link>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {relatedServices.map((item) => (
              <Link
                key={item.id}
                href={`/urunler/${item.slug}`}
                className="group rounded-2xl border border-[#DDB89F]/55 bg-[#FFF8F3] p-5 shadow-[0_16px_45px_rgba(58,42,36,0.05)] transition hover:-translate-y-1 hover:border-[#8F4B38]/55"
              >
                <span className="text-lg font-semibold text-[#2F211C] transition group-hover:text-[#7A3429]">
                  {item.title}
                </span>
                <span className="mt-3 block text-sm leading-7 text-[#5F4E46]">
                  {item.shortDescription}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
