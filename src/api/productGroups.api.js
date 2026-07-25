import { supabase } from "./Supabaseclient";

export async function fetchProductGroups() {
  const { data, error } = await supabase.from('product_groups').select('*').order('title');
  if (error) throw error;
  return data;
}

export async function fetchGroupBySlug(slug) {
  const { data: group, error: groupError } = await supabase
    .from('product_groups')
    .select('*')
    .eq('slug', slug)
    .single();
  if (groupError) throw groupError;

  const { data: products, error: productsError } = await supabase
    .from('products')
    .select('*')
    .eq('group_id', group.id)
    .order('number');
  if (productsError) throw productsError;

  return { ...group, products };
}


export async function fetchProductBySlug(groupSlug, productSlug) {
  const { data: group, error: groupError } = await supabase
    .from('product_groups')
    .select('*')
    .eq('slug', groupSlug)
    .single();
  if (groupError) throw groupError;

  const { data: product, error: productError } = await supabase
    .from('products')
    .select('*')
    .eq('group_id', group.id)
    .eq('slug', productSlug)
    .single();
  if (productError) throw productError;

  const [{ data: detail }, { data: technicalHighlights }, { data: applicationImages }, { data: documents }] =
    await Promise.all([
      supabase.from('product_details').select('*').eq('product_id', product.id).maybeSingle(),
      supabase.from('technical_highlights').select('*').eq('product_id', product.id).order('sort_order'),
      supabase.from('application_images').select('*').eq('product_id', product.id).order('sort_order'),
      supabase.from('product_documents').select('*').eq('product_id', product.id),
    ]);

  return {
    group,
    product: {
      ...product,
      detail: detail
        ? {
            ...detail,
            technicalHighlights: technicalHighlights ?? [],
            applicationImages: (applicationImages ?? []).map((row) => row.image_url),
          }
        : null,
      documents: documents ?? [],
    },
  };
}