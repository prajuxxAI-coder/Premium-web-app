from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1920, "height": 1080})

        print("Navigating to localhost:3000...")
        try:
            page.goto("http://localhost:3000", timeout=60000)
        except Exception as e:
            print(f"Error loading page: {e}")
            browser.close()
            return

        print("Waiting for animations...")
        time.sleep(3)

        print("Taking screenshot...")
        page.screenshot(path="verification/hero_section.png")

        print("Scrolling...")
        page.mouse.wheel(0, 500)
        time.sleep(1)
        page.screenshot(path="verification/hero_scrolled.png")

        browser.close()
        print("Done.")

if __name__ == "__main__":
    run()
