import {
  SiCanva,
  SiGitlab,
  SiOpenai,
  SiSap,
  SiYoutube,
} from "react-icons/si";
import { cn } from "@/lib/utils";

function LogoImg({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- local SVG marks; avoids optimizer quirks
    <img src={src} alt={alt} className={className} loading="lazy" decoding="async" />
  );
}

function LightPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-gradient-to-b from-white to-zinc-100 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
      {children}
    </div>
  );
}

function DarkPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-charcoal/90 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      {children}
    </div>
  );
}

/** Typographic stand-in when no official SVG asset is hosted (permitted brand colors / wordmarks only). */
function BrandWordmark({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <DarkPanel>
      <p
        className={cn(
          "text-center font-display text-lg font-semibold leading-snug tracking-tight text-surface-foreground sm:text-xl",
          className,
        )}
      >
        {children}
      </p>
    </DarkPanel>
  );
}

/**
 * Logo marks per collaboration card (official SVGs where we host them + wordmarks elsewhere).
 */
export function ProjectLogoMarks({
  projectId,
  fallbackTitle,
}: {
  projectId: string;
  /** Shown when `projectId` has no case (new entries in `projects` stay visible). */
  fallbackTitle?: string;
}) {
  switch (projectId) {
    case "youtube-ai":
      return (
        <LightPanel>
          <SiYoutube
            className="size-[4.5rem] text-[#FF0000] drop-shadow-[0_12px_24px_rgba(255,0,0,0.35)] sm:size-[5.25rem]"
            aria-hidden
          />
          <span className="sr-only">YouTube</span>
        </LightPanel>
      );

    case "getty-met":
      return (
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
          <LightPanel>
            <LogoImg
              src="/logos/getty-images.svg"
              alt="Getty Images"
              className="h-9 w-auto max-w-[min(200px,42vw)] object-contain sm:h-11"
            />
          </LightPanel>
          <DarkPanel>
            <LogoImg
              src="/logos/met-gala.svg"
              alt="Met Gala"
              className="h-10 w-auto max-w-[min(200px,42vw)] object-contain sm:h-12"
            />
          </DarkPanel>
        </div>
      );

    case "recording-academy":
      return (
        <DarkPanel>
          <LogoImg
            src="/logos/recording-academy.svg"
            alt="The Recording Academy"
            className="h-24 w-auto max-w-[min(260px,80vw)] object-contain sm:h-28"
          />
        </DarkPanel>
      );

    case "imex":
      return (
        <DarkPanel>
          <LogoImg
            src="/logos/imex.svg"
            alt="IMEX"
            className="h-10 w-auto object-contain sm:h-11"
          />
        </DarkPanel>
      );

    case "possible":
      return (
        <DarkPanel>
          <div className="flex flex-col items-center gap-4">
            <LogoImg
              src="/logos/possible.svg"
              alt="POSSIBLE"
              className="h-9 w-auto max-w-[min(240px,70vw)] object-contain sm:h-10"
            />
            <p className="text-center text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
              Floor partners (examples)
            </p>
            <div
              className="flex flex-wrap items-center justify-center gap-5"
              aria-hidden
            >
              <SiSap className="h-8 w-10 text-[#008FD3]" />
              <SiGitlab className="size-9 text-[#FC6D26]" />
              <SiOpenai className="size-8 text-white" />
            </div>
            <span className="sr-only">
              SAP, GitLab, and OpenAI — examples from event backdrops referenced in
              copy
            </span>
          </div>
        </DarkPanel>
      );

    case "miami-swim":
      return (
        <DarkPanel>
          <LogoImg
            src="/logos/miami-swim-week.svg"
            alt="Miami Swim Week"
            className="h-20 w-auto max-w-[min(280px,85vw)] object-contain sm:h-24"
          />
        </DarkPanel>
      );

    case "dope-labs":
      return (
        <LightPanel>
          <div className="flex flex-col items-center gap-2">
            <LogoImg
              src="/logos/spotify.svg"
              alt="Spotify"
              className="size-14 object-contain sm:size-16"
            />
            <span className="text-center text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
              Dope Labs · Gimlet
            </span>
          </div>
        </LightPanel>
      );

    case "sistas-in-sales":
      return (
        <DarkPanel>
          <LogoImg
            src="/logos/sistas-in-sales.svg"
            alt="Sistas in Sales"
            className="h-16 w-auto max-w-[min(220px,75vw)] object-contain sm:h-[4.5rem]"
          />
        </DarkPanel>
      );

    case "canva":
      return (
        <LightPanel>
          <SiCanva
            className="size-[4.5rem] text-[#00C4CC] drop-shadow-[0_12px_24px_rgba(0,196,204,0.35)] sm:size-[5.25rem]"
            aria-hidden
          />
          <span className="sr-only">Canva</span>
        </LightPanel>
      );

    case "hitouch":
      return (
        <DarkPanel>
          <LogoImg
            src="/logos/hitouch.svg"
            alt="HiTouch"
            className="h-12 w-auto max-w-[min(240px,80vw)] object-contain sm:h-14"
          />
        </DarkPanel>
      );

    case "visit-org":
      return (
        <DarkPanel>
          <LogoImg
            src="/logos/visit-org.png"
            alt="Visit.org"
            className="h-10 w-auto max-w-[min(260px,80vw)] object-contain sm:h-11"
          />
        </DarkPanel>
      );

    case "ahk":
      return (
        <LightPanel>
          <LogoImg
            src="/logos/ahk-usa.svg"
            alt="German American Chamber of Commerce (AHK USA)"
            className="h-14 w-auto max-w-[min(320px,90vw)] object-contain sm:h-16"
          />
        </LightPanel>
      );

    case "radio-one":
      return (
        <LightPanel>
          <LogoImg
            src="/logos/urban-one.png"
            alt="Urban One"
            className="h-10 w-auto max-w-[min(220px,75vw)] object-contain sm:h-11"
          />
          <p className="mt-2 text-center text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
            Radio One
          </p>
          <span className="sr-only">Radio One (Urban One)</span>
        </LightPanel>
      );

    case "city-of-philadelphia":
      return (
        <LightPanel>
          <LogoImg
            src="/logos/city-of-philadelphia.svg"
            alt="City of Philadelphia"
            className="h-24 w-auto max-w-[min(300px,90vw)] object-contain sm:h-28"
          />
        </LightPanel>
      );

    case "ndsu":
      return (
        <DarkPanel>
          <LogoImg
            src="/logos/ndsu-bison-wordmark.svg"
            alt="North Dakota State University"
            className="h-24 w-auto max-w-[min(280px,85vw)] object-contain sm:h-28"
          />
        </DarkPanel>
      );

    case "black-girl-art-show":
      return (
        <DarkPanel>
          <LogoImg
            src="/logos/black-girl-art-show.svg"
            alt="A Spectacular Black Girl Art Show"
            className="h-28 w-auto max-w-[min(280px,90vw)] object-contain sm:h-32"
          />
        </DarkPanel>
      );

    case "fader":
      return (
        <DarkPanel>
          <LogoImg
            src="/logos/fader.svg"
            alt="FADER"
            className="h-24 w-auto max-w-[min(260px,85vw)] object-contain sm:h-28"
          />
        </DarkPanel>
      );

    case "parsons":
      return (
        <LightPanel>
          <LogoImg
            src="/logos/parsons.svg"
            alt="Parsons School of Design"
            className="h-24 w-auto max-w-[min(300px,90vw)] object-contain sm:h-28"
          />
        </LightPanel>
      );

    default:
      return fallbackTitle ? (
        <BrandWordmark className="text-base sm:text-lg">{fallbackTitle}</BrandWordmark>
      ) : null;
  }
}
