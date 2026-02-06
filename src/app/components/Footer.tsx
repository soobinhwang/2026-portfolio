export default function Footer() {
  return (
    <footer className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Footer">
      <div className="flex items-center justify-center max-w-[1200px] py-[48px] relative w-full px-[16px]">
        <div className="flex gap-[8px] items-center relative shrink-0">
          <div className="flex flex-col font-newsreader font-normal justify-center leading-[0] relative shrink-0 text-[#32404f] text-[16px] tracking-[-0.424px] whitespace-nowrap">
            <p className="leading-[24px]">Sue Hwang</p>
          </div>
          <div className="flex flex-col font-geist-mono font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(50,64,79,0.58)] whitespace-nowrap">
            <p className="leading-[24px]">{`© ${new Date().getFullYear()}`}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
