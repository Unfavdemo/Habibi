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
    <img
      src={src}
      alt={alt}
      className={cn("object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.12)]", className)}
      loading="lazy"
      decoding="async"
    />
  );
}

function LogoStage({
  tone,
  children,
  className,
}: {
  tone: "light" | "dark";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center rounded-xl px-4 py-4 sm:px-5 sm:py-5",
        tone === "light"
          ? "border border-black/[0.08] bg-zinc-50"
          : "border border-white/12 bg-[#121218]",
        className,
      )}
    >
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
    <LogoStage tone="dark">
      <p
        className={cn(
          "text-center font-display text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl",
          className,
        )}
      >
        {children}
      </p>
    </LogoStage>
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
        <LogoStage tone="light">
          <SiYoutube
            className="size-16 text-[#FF0000] sm:size-20"
            aria-hidden
          />
          <span className="sr-only">YouTube</span>
        </LogoStage>
      );

    case "getty-met":
      return (
        <div className="flex w-full flex-wrap items-center justify-center gap-4 sm:gap-6">
          <LogoStage tone="light" className="min-w-[9rem] flex-1">
            <LogoImg
              src="/logos/getty-images.svg"
              alt="Getty Images"
              className="h-10 w-full max-w-[200px] sm:h-12"
            />
          </LogoStage>
          <LogoStage tone="dark" className="min-w-[9rem] flex-1">
            <LogoImg
              src="/logos/met-gala.svg"
              alt="Met Gala"
              className="h-10 w-full max-w-[200px] sm:h-12"
            />
          </LogoStage>
        </div>
      );

    case "recording-academy":
      return (
        <LogoStage tone="dark">
          <LogoImg
            src="/logos/recording-academy.svg"
            alt="The Recording Academy"
            className="h-20 w-full max-w-[280px] sm:h-24"
          />
        </LogoStage>
      );

    case "imex":
      return (
        <LogoStage tone="light">
          <LogoImg
            src="/logos/imex.svg"
            alt="IMEX"
            className="h-12 w-full max-w-[200px] sm:h-14"
          />
        </LogoStage>
      );

    case "possible":
      return (
        <LogoStage tone="dark">
          <div className="flex w-full flex-col items-center gap-4">
            <LogoImg
              src="/logos/possible.svg"
              alt="POSSIBLE"
              className="h-10 w-full max-w-[240px] sm:h-12"
            />
            <p className="text-center text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
              Floor partners (examples)
            </p>
            <div
              className="flex flex-wrap items-center justify-center gap-5"
              aria-hidden
            >
              <SiSap className="h-9 w-11 text-[#008FD3]" />
              <SiGitlab className="size-10 text-[#FC6D26]" />
              <SiOpenai className="size-9 text-white" />
            </div>
            <span className="sr-only">
              SAP, GitLab, and OpenAI — examples from event backdrops referenced in
              copy
            </span>
          </div>
        </LogoStage>
      );

    case "miami-swim":
      return (
        <LogoStage tone="dark">
          <LogoImg
            src="/logos/miami-swim-week.svg"
            alt="Miami Swim Week"
            className="h-20 w-full max-w-[280px] sm:h-24"
          />
        </LogoStage>
      );

    case "dope-labs":
      return (
        <LogoStage tone="light">
          <div className="flex flex-col items-center gap-2">
            <LogoImg
              src="/logos/spotify.svg"
              alt="Spotify"
              className="size-16 sm:size-20"
            />
            <span className="text-center text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
              Dope Labs · Gimlet
            </span>
          </div>
        </LogoStage>
      );

    case "sistas-in-sales":
      return (
        <LogoStage tone="light">
          <LogoImg
            src="/logos/sistas-in-sales.svg"
            alt="Sistas in Sales"
            className="h-20 w-full max-w-[240px] sm:h-24"
          />
        </LogoStage>
      );

    case "canva":
      return (
        <LogoStage tone="light">
          <SiCanva
            className="size-16 text-[#00C4CC] sm:size-20"
            aria-hidden
          />
          <span className="sr-only">Canva</span>
        </LogoStage>
      );

    case "hitouch":
      return (
        <LogoStage tone="dark">
          <LogoImg
            src="/logos/hitouch.svg"
            alt="HiTouch"
            className="h-12 w-full max-w-[260px] sm:h-14"
          />
        </LogoStage>
      );

    case "visit-org":
      return (
        <LogoStage tone="light">
          <LogoImg
            src="/logos/visit-org.png"
            alt="Visit.org"
            className="h-12 w-full max-w-[280px] sm:h-14"
          />
        </LogoStage>
      );

    case "ahk":
      return (
        <LogoStage tone="light">
          <LogoImg
            src="/logos/ahk-usa.svg"
            alt="German American Chamber of Commerce (AHK USA)"
            className="h-14 w-full max-w-[320px] sm:h-16"
          />
        </LogoStage>
      );

    case "radio-one":
      return (
        <LogoStage tone="light">
          <div className="flex flex-col items-center">
            <LogoImg
              src="/logos/urban-one.png"
              alt="Urban One"
              className="h-11 w-full max-w-[240px] sm:h-12"
            />
            <p className="mt-2 text-center text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
              Radio One
            </p>
            <span className="sr-only">Radio One (Urban One)</span>
          </div>
        </LogoStage>
      );

    case "city-of-philadelphia":
      return (
        <LogoStage tone="light">
          <LogoImg
            src="/logos/city-of-philadelphia.svg"
            alt="City of Philadelphia"
            className="h-24 w-full max-w-[300px] sm:h-28"
          />
        </LogoStage>
      );

    case "ndsu":
      return (
        <LogoStage tone="light">
          <LogoImg
            src="/logos/ndsu-bison-wordmark.svg"
            alt="North Dakota State University"
            className="h-24 w-full max-w-[280px] sm:h-28"
          />
        </LogoStage>
      );

    case "black-girl-art-show":
      return (
        <LogoStage tone="dark">
          <LogoImg
            src="/logos/black-girl-art-show.svg"
            alt="A Spectacular Black Girl Art Show"
            className="h-24 w-full max-w-[300px] sm:h-28"
          />
        </LogoStage>
      );

    case "fader":
      return (
        <LogoStage tone="dark">
          <LogoImg
            src="/logos/fader.svg"
            alt="FADER"
            className="h-14 w-full max-w-[260px] sm:h-16"
          />
        </LogoStage>
      );

    case "parsons":
      return (
        <LogoStage tone="light">
          <LogoImg
            src="/logos/parsons.svg"
            alt="Parsons School of Design"
            className="h-20 w-full max-w-[300px] sm:h-24"
          />
        </LogoStage>
      );

    default:
      return fallbackTitle ? (
        <BrandWordmark className="text-base sm:text-lg">{fallbackTitle}</BrandWordmark>
      ) : null;
  }
}
