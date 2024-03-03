import React from 'react';
import { Link } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';

export function ExternalLink(
  props: Omit<React.ComponentProps<typeof Link>, 'href'> & { href: string }
) {
  return (
    <Link
      target="_blank"
      {...props}
      // @ts-expect-error: External URLs are not typed.
      href={props.href}
      onPress={(event) => {
        // Prevent the default behavior of linking to the default browser on native.
        event.preventDefault();
        WebBrowser.openBrowserAsync(props.href);
      }}
    />
  );
}
